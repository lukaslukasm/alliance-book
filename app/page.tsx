import AllianceBook from "@/components/alliance-book";
import { TypographyH1 } from "@/components/ui/typography-h1";
import {
  filterCharacters,
  getCharacters,
  searchCharacters,
} from "@/services/characters.service";
import { Character, SearchParams } from "@/types/types";

type HomepageProps = {
  searchParams: Promise<SearchParams>;
};

const FILTERABLE_KEYS: (keyof Character)[] = ["homeworldId", "gender"];

// warming the cache at build time
export async function generateStaticParams() {
  await getCharacters(process.env.DATA_URL);
  return [];
}

export default async function Home({ searchParams }: HomepageProps) {
  const resolvedSearchParams = await searchParams;
  const characters: Character[] = await getCharacters(process.env.DATA_URL);
  let searchedCharacters: Character[] | null = null;
  let filteredCharacters: Character[] | null = null;

  // search
  if (resolvedSearchParams.search)
    searchedCharacters = searchCharacters(
      characters,
      resolvedSearchParams.search.toLowerCase(),
    );

  // filters
  FILTERABLE_KEYS.forEach((key) => {
    const paramValue = resolvedSearchParams[key];

    if (paramValue)
      filteredCharacters = filterCharacters(
        searchedCharacters ?? characters,
        key,
        paramValue,
      );
  });

  return (
    <main className="flex flex-col gap-4 px-2 my-8 items-center">
      <TypographyH1>The Alliance Book</TypographyH1>
      <AllianceBook
        searchParams={resolvedSearchParams}
        characters={filteredCharacters ?? searchedCharacters ?? characters}
        page={Number(resolvedSearchParams.page ?? 1)}
      />
    </main>
  );
}
