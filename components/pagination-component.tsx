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
};

export default function PaginationComponent({
  currentPage,
  pageCount,
}: PaginationComponentProps) {
  return (
    <Pagination>
      <PaginationContent>
        {currentPage > 1 && (
          <>
            <PaginationItem>
              <PaginationPrevious href={`?page=${currentPage - 1}`} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={`?page=${currentPage - 1}`}>
                {currentPage - 1}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        <PaginationItem>
          <PaginationLink href={`?page=${currentPage}`} isActive>
            {currentPage}
          </PaginationLink>
        </PaginationItem>
        {currentPage < pageCount && (
          <>
            <PaginationItem>
              <PaginationLink href={`?page=${currentPage + 1}`}>
                {Number(currentPage + 1)}
              </PaginationLink>
            </PaginationItem>
            {currentPage + 1 < pageCount && <PaginationEllipsis />}

            <PaginationItem>
              <PaginationNext href={`?page=${currentPage - 1}`} />
            </PaginationItem>
          </>
        )}
      </PaginationContent>
    </Pagination>
  );
}
