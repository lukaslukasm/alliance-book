import { FILTERABLE_ATTRIBUTES } from "@/lib/constants";
import { getIdFromUrl } from "@/lib/utils";
import { Character, SWAPICharacterRaw } from "@/types/types";
import { cache } from "react";

/**
 * Exhaustively fetches data from the URL, merges results and enhances them with ids.
 *
 */
export const getCharacters = async (url: string = ""): Promise<Character[]> => {
  if (!url) throw new Error("No URL was provided.");

  const firstPage = await fetch(url, { cache: "force-cache" });
  const firstPageData = await firstPage.json();
  const totalCount = firstPageData.count;
  const totalPages = Math.ceil(totalCount / 10);
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

/**
 * case-insensitive text search. Returns an array of Characters whose
 * name, birth_year, gender, hair_color, eye_color or a skin_color includes the query.
 *
 */
export const searchCharacters = cache(
  (characters: Character[], searchQuery: string): Character[] => {
    return characters.filter((ch) =>
      ch.name.toLowerCase().includes(searchQuery),
    );
  },
);

/**
 * Filters the characters in the character array by a provided value of the provided attribute.
 *
 */
export function filterCharacters(
  characters: Character[],
  attribute: (typeof FILTERABLE_ATTRIBUTES)[number],
  value: number | string | string[],
): Character[] {
  if (!Array.isArray(value))
    return characters.filter((ch) => {
      const typedValue =
        typeof ch[attribute] === "number" ? Number(value) : value;

      return ch[attribute] === typedValue;
    });
  else {
    return characters.filter((ch) => {
      return value.includes(String(ch[attribute]));
    });
  }
}
