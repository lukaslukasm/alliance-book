import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getIdFromUrl(url: string) {
  if (!url) throw new Error(`${url} is not a URL.`);

  const matches = url.match(/\/(\d+)\/$/);
  return Number(matches ? matches[1] : "");
}
