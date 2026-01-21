import { Character, SearchParams } from "@/types/types";
import { FILTERABLE_ATTRIBUTES } from "@/lib/constants";
import { cache } from "react";

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

/**
 * Applies a cumulative pipeline of search and categorical filters to a character list. Retursn a new array of filtered characters
 * @param characters - The initial array of characters to be filtered
 * @param searchParams - An object containing active filters, search queries, and pagination state
 */
export function applyFilters(
  characters: Character[],
  searchParams: SearchParams,
): Character[] {
  let results = characters;

  // filter application
  for (const [key, value] of Object.entries(searchParams)) {
    if (!results.length) return results;

    switch (key) {
      case "search":
        results = searchCharacters(results, String(value)!.toLowerCase());
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
            results = filterCharacters(
              results,
              key as (typeof FILTERABLE_ATTRIBUTES)[number],
              value,
            );
        }
        break;
    }
  }

  return results;
}
