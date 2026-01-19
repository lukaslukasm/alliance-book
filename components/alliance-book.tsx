"use client";
import { Character } from "@/types/types";
import PeopleList from "./people-list";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "./ui/pagination";

/**
 * Root Client-side component. Renders the whole Alliance Book.
 *
 */
function AllianceBook({ characters }: { characters: Character[] }) {
  return (
    <Card className="w-[min(100%,50rem)] max-sm:py-3 max-sm:gap-3">
      <CardHeader>
        <CardTitle>The Alliance Book</CardTitle>
        <CardDescription>
          Browse and learn about the characters from the Star Wars Universe.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <PeopleList characters={characters} />
      </CardContent>
      <CardFooter>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationLink href="#page=1">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#page=1">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#page=1">3</PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardFooter>
    </Card>
  );
}
export default AllianceBook;
