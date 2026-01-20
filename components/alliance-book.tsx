import { Character, Planet, SearchParams } from "@/types/types";
import PeopleList from "./people-list";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import PaginationComponent from "./pagination-component";
import Search from "./search";
import MultiSelectFilter from "./filters/multi-select-filter";
import { GENDERS } from "@/lib/constants";

export type AllianceBookProps = {
  characters: Character[];
  page: number;
  searchParams: SearchParams;
  planets: Planet[];
};

const PAGINATION_OFFSET = 12;

/**
 * Root Client-side component. Renders the whole Alliance Book.
 *
 */
function AllianceBook({
  characters,
  page,
  searchParams,
  planets,
}: AllianceBookProps) {
  const pageCount = Math.ceil(characters.length / PAGINATION_OFFSET);

  return (
    <Card className="w-[min(100%,50rem)] max-sm:py-3 max-sm:gap-3">
      <CardHeader>
        <CardTitle>The Alliance Book</CardTitle>
        <CardDescription>
          Browse and learn about the characters from the Star Wars Universe.
        </CardDescription>
        <Search />
        <div className="grid sm:grid-cols-2 sm:gap-3 gap-2">
          <MultiSelectFilter
            attribute="gender"
            searchable={false}
            placeholder="Filter Genders"
            options={GENDERS.map((gender) => ({
              value: gender,
              label: gender,
            }))}
          />
          <MultiSelectFilter
            attribute="homeworldId"
            placeholder="Filter Homeworlds"
            options={planets.map((planet) => ({
              value: String(planet.id),
              label: planet.name,
            }))}
          />
        </div>
      </CardHeader>
      <CardContent>
        <PeopleList
          characters={characters.slice(
            (page - 1) * PAGINATION_OFFSET,
            page * PAGINATION_OFFSET,
          )}
        />
      </CardContent>
      <CardFooter>
        <PaginationComponent
          searchParams={searchParams}
          pageCount={pageCount}
          currentPage={page}
        />
      </CardFooter>
    </Card>
  );
}
export default AllianceBook;
