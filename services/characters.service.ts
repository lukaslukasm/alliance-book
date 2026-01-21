import { getIdFromUrl } from "@/lib/utils";
import { Character, SWAPICharacterRaw } from "@/types/types";

/**
 * Exhaustively fetches data from the URL and aggregates the data into Character object array.
 *
 */
export const getCharacters = async (url: string = ""): Promise<Character[]> => {
  if (!url) throw new Error("No URL was provided.");

  const firstPage = await fetch(url, { cache: "force-cache" });
  const firstPageData = await firstPage.json();
  const totalCount = firstPageData.count;
  const totalPages = Math.ceil(totalCount / firstPageData.results.length);
  const pagePromises = [];
  for (let i = 2; i <= totalPages; i++) {
    pagePromises.push(
      fetch(`${url}?page=${i}`, { cache: "force-cache" }).then((res) =>
        res.json(),
      ),
    );
  }

  const remainingPages = await Promise.all(pagePromises);

  const allResults = [
    ...firstPageData.results,
    ...remainingPages.flatMap((res) => res.results),
  ];
  return allResults.map((char: SWAPICharacterRaw) => {
    return {
      id: getIdFromUrl(char.url),
      homeworldId: getIdFromUrl(char.homeworld),
      vehiclesIds: char.vehicles.map((v) => getIdFromUrl(v)),
      filmsIds: char.films.map((f) => getIdFromUrl(f)),
      starshipsIds: char.starships.map((s) => getIdFromUrl(s)),
      speciesId: char.species[0] ? getIdFromUrl(char.species[0]) : null,
      hair_color: char.hair_color,
      eye_color: char.eye_color,
      mass: char.mass,
      height: char.height,
      gender: char.gender,
      name: char.name,
      skin_color: char.skin_color,
      birth_year: char.birth_year,
    } as Character;
  });
};
