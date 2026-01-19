import AllianceBook from "@/components/alliance-book";
import { TypographyH1 } from "@/components/ui/typography-h1";
import { getCharacters, searchCharacters } from "@/services/characters.service";
import { Character, SearchParams } from "@/types/types";

type HomepageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function Home({ searchParams }: HomepageProps) {
  const resolvedSearchParams = await searchParams;
  const characters: Character[] = await getCharacters(process.env.DATA_URL);
  let filteredCharacters: Character[] | null = null;

  if (resolvedSearchParams.search)
    filteredCharacters = searchCharacters(
      characters,
      resolvedSearchParams.search.toLowerCase(),
    );

  return (
    <main className="flex flex-col gap-4 px-2 my-8 items-center">
      <TypographyH1>The Alliance Book</TypographyH1>
      <AllianceBook
        searchParams={resolvedSearchParams}
        characters={filteredCharacters ?? characters}
        page={Number(resolvedSearchParams.page ?? 1)}
      />
    </main>
  );
}
