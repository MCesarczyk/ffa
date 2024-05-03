import { NavItem } from '../navItem';

interface PaginationProps {
  totalPages: number;
}

export const Pagination = ({ totalPages }: PaginationProps) => {
  return (
    <ul
      aria-label="pagination"
      className="list-none flex gap-1 w-full justify-center mt-4"
    >
      {Array.from({ length: totalPages }).map((_, index) => (
        <NavItem key={index} url={`/products/${index + 1}`}>
          {index + 1}
        </NavItem>
      ))}
    </ul>
  );
};
