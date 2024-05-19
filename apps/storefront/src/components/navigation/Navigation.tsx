import { type Route } from 'next';
import { NavItem } from '../navItem';

interface PaginationProps {
  totalPages: number;
  path: string;
}

export const Pagination = ({ totalPages, path }: PaginationProps) => {
  return (
    <ul
      aria-label="pagination"
      className="list-none flex gap-1 w-full justify-center mt-4"
    >
      {Array.from({ length: totalPages }).map((_, index) => (
        <NavItem key={index} url={`/${path}/${index + 1}` as Route<string>}>
          {index + 1}
        </NavItem>
      ))}
    </ul>
  );
};
