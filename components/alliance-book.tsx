import { Character, SearchParams } from "@/types/types";
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

export type AllianceBookProps = {
  characters: Character[];
  page: number;
  searchParams: SearchParams;
};

const PAGINATION_OFFSET = 12;

/**
 * Root Client-side component. Renders the whole Alliance Book.
 *
 */
function AllianceBook({ characters, page, searchParams }: AllianceBookProps) {
  const pageCount = Math.ceil(characters.length / PAGINATION_OFFSET);

  return (
    <Card className="w-[min(100%,50rem)] max-sm:py-3 max-sm:gap-3">
      <CardHeader>
        <CardTitle>The Alliance Book</CardTitle>
        <CardDescription>
          Browse and learn about the characters from the Star Wars Universe.
        </CardDescription>
        <Search />
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
