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
import { createURL } from "@/lib/utils";

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
  return (
    <Pagination>
      <PaginationContent>
        {currentPage > 1 && (
          <>
            <PaginationItem>
              <PaginationPrevious
                href={createURL(currentPage - 1, searchParams)}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={createURL(currentPage - 1, searchParams)}>
                {currentPage - 1}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        <PaginationItem>
          <PaginationLink href={createURL(currentPage, searchParams)} isActive>
            {currentPage}
          </PaginationLink>
        </PaginationItem>
        {currentPage < pageCount && (
          <>
            <PaginationItem>
              <PaginationLink href={createURL(currentPage + 1, searchParams)}>
                {Number(currentPage + 1)}
              </PaginationLink>
            </PaginationItem>
            {currentPage + 1 < pageCount && <PaginationEllipsis />}
            <PaginationItem>
              <PaginationNext href={createURL(currentPage + 1, searchParams)} />
            </PaginationItem>
          </>
        )}
      </PaginationContent>
    </Pagination>
  );
}
