import { Character, SWAPICharacterRaw } from "@/types/types";
import axios from "axios";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getIdFromUrl(url: string) {
  const matches = url.match(/\/(\d+)\/$/);
  return Number(matches ? matches[1] : "");
}

export async function getPeople(url: string = ""): Promise<Character[]> {
  if (!url) throw new Error("No URL was provided.");

  const firstPage = await axios.get(url);
  const totalCount = firstPage.data.count;
  const totalPages = Math.ceil(totalCount / 10);

  const pagePromises = [];
  for (let i = 2; i <= totalPages; i++) {
    pagePromises.push(axios.get(`${url}?page=${i}`));
  }

  const remainingPages = await Promise.all(pagePromises);

  const allResults = [
    ...firstPage.data.results,
    ...remainingPages.flatMap((res) => res.data.results),
  ];

  return allResults.map(
    (char: SWAPICharacterRaw) =>
      ({
        id: getIdFromUrl(char.url),
        ...char,
      }) as Character,
  );
}
