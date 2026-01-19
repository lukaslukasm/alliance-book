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

  // return [];
  return allResults.map(
    (char: SWAPICharacterRaw) =>
      ({
        id: getIdFromUrl(char.url),
        ...char,
      }) as Character,
  );
};

export const searchCharacters = cache(
  (characters: Character[], searchQuery: string): Character[] => {
    return characters.filter(
      (ch) =>
        ch.name.toLowerCase().includes(searchQuery) ||
        ch.birth_year.toLowerCase().includes(searchQuery) ||
        ch.gender.toLowerCase().includes(searchQuery) ||
        ch.hair_color.toLowerCase().includes(searchQuery) ||
        ch.eye_color.toLowerCase().includes(searchQuery) ||
        ch.skin_color.toLowerCase().includes(searchQuery),
    );
  },
);
