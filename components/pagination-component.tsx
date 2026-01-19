import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "./ui/pagination";

export type PaginationComponentProps = {
  currentPage: number;
  pageCount: number;
};

export default function PaginationComponent({
  currentPage = 1,
  pageCount,
}: PaginationComponentProps) {
  return (
    <Pagination>
      <PaginationContent>
        {Array(pageCount)
          .fill("")
          .map((item, index) => (
            <PaginationItem key={`pageLink-${+index}`}>
              <PaginationLink
                href={`?page=${index + 1}`}
                isActive={currentPage == index + 1}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
      </PaginationContent>
    </Pagination>
  );
}
