import { SearchParams } from "@/types/types";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

export type PaginationComponentProps = {
  currentPage: number;
  pageCount: number;
  searchParams: SearchParams;
};

export default function PaginationComponent({
  currentPage,
  pageCount,
  searchParams,
}: PaginationComponentProps) {
  function createURL(targetPageId: number) {
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

  return (
    <Pagination>
      <PaginationContent>
        {currentPage > 1 && (
          <>
            <PaginationItem>
              <PaginationPrevious href={createURL(currentPage - 1)} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={createURL(currentPage - 1)}>
                {currentPage - 1}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        <PaginationItem>
          <PaginationLink href={createURL(currentPage)} isActive>
            {currentPage}
          </PaginationLink>
        </PaginationItem>
        {currentPage < pageCount && (
          <>
            <PaginationItem>
              <PaginationLink href={createURL(currentPage + 1)}>
                {Number(currentPage + 1)}
              </PaginationLink>
            </PaginationItem>
            {currentPage + 1 < pageCount && <PaginationEllipsis />}
            <PaginationItem>
              <PaginationNext href={createURL(currentPage + 1)} />
            </PaginationItem>
          </>
        )}
      </PaginationContent>
    </Pagination>
  );
}
