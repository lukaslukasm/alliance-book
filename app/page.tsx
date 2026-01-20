import AllianceBook from "@/components/alliance-book";
import { TypographyH1 } from "@/components/ui/typography-h1";
import { FILTERABLE_ATTRIBUTES } from "@/lib/constants";
import {
  filterCharacters,
  getCharacters,
  searchCharacters,
} from "@/services/characters.service";
import { Character, SearchParams } from "@/types/types";

type HomepageProps = {
  searchParams: Promise<SearchParams>;
};

// warming the cache at build time
export async function generateStaticParams() {
  await getCharacters(process.env.DATA_URL);
  return [];
}

export default async function Home({ searchParams }: HomepageProps) {
  const resolvedSearchParams = await searchParams;
  const characters: Character[] = await getCharacters(
    `${process.env.DATA_URL}people/`,
  );
  let searchedCharacters: Character[] | null = null;
  let filteredCharacters: Character[] | null = null;

  // filters
  Object.entries(resolvedSearchParams).forEach(([key, value]) => {
    switch (key) {
      case "search":
        searchedCharacters = searchCharacters(
          characters,
          String(value)!.toLowerCase(),
        );
        break;
      case "page":
        break;
      default:
        if (
          FILTERABLE_ATTRIBUTES.includes(
            key as (typeof FILTERABLE_ATTRIBUTES)[number],
          )
        ) {
          if (value)
            filteredCharacters = filterCharacters(
              filteredCharacters ?? searchedCharacters ?? characters,
              key as (typeof FILTERABLE_ATTRIBUTES)[number],
              value,
            );
        }
        break;
    }
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
