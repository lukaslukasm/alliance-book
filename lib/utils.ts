import { SearchParams } from "@/types/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Retrieves an ID from a given URL.
 *
 */
export function getIdFromUrl(url: string) {
  if (!url) throw new Error(`${url} is not a URL.`);

  const matches = url.match(/\/(\d+)\/$/);
  return Number(matches ? matches[1] : "");
}

/**
 * Creates a new URL with a page param pointing to targetPageId while honouring existing URL params.
 *
 */
export function createURL(targetPageId: number, searchParams: SearchParams) {
  const newURL = new URLSearchParams();
  const flattenedFilters = Object.entries(searchParams).flatMap(
    ([key, value]) => {
      if (Array.isArray(value)) {
        return value.map((v) => [key, v]);
      }
      return [[key, value]];
    },
  );

  flattenedFilters.forEach(([key, value]) => {
    newURL.append(`${key}`, `${value}`);
  });
  newURL.set("page", targetPageId.toString());

  return `?${newURL.toString()}`;
}
