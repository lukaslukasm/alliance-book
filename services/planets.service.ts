import { getIdFromUrl } from "@/lib/utils";
import { Planet, SWAPIPlanetRaw } from "@/types/types";

export const getPlanets = async (url: string = ""): Promise<Planet[]> => {
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
  return allResults.map((planet: SWAPIPlanetRaw) => {
    return {
      id: getIdFromUrl(planet.url),
      name: planet.name,
    } as Planet;
  });
};
