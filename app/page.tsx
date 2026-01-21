import AllianceBook from "@/components/alliance-book";
import { TypographyH1 } from "@/components/ui/typography-h1";
import { getCharacters } from "@/services/characters.service";
import { applyFilters } from "@/services/filtering.service";
import { getPlanets } from "@/services/planets.service";
import { Character, Planet, SearchParams } from "@/types/types";

type HomepageProps = {
  searchParams: Promise<SearchParams>;
};

// // warming the cache at build time
// export async function generateStaticParams() {
//   await getCharacters(process.env.DATA_URL);
//   await getPlanets(`${process.env.DATA_URL}planets/`);
//   return [];
// }

export default async function Home({ searchParams }: HomepageProps) {
  const resolvedSearchParams = await searchParams;
  const characters: Character[] = await getCharacters(
    `${process.env.DATA_URL}people/`,
  );
  const planets: Planet[] = await getPlanets(`${process.env.DATA_URL}planets/`);

  const filteredCharacters = applyFilters(characters, resolvedSearchParams);

  return (
    <main className="flex flex-col gap-4 px-2 my-8 items-center">
      <TypographyH1>The Alliance Book</TypographyH1>
      <AllianceBook
        planets={planets}
        searchParams={resolvedSearchParams}
        characters={filteredCharacters}
        page={Number(resolvedSearchParams.page ?? 1)}
      />
    </main>
  );
}
