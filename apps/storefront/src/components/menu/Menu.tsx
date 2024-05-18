import { type ReactNode } from 'react';
import { NavItem } from '../navItem';
import { type CategoryDto } from '../../categories/types';

interface MenuProps {
  categories: CategoryDto[];
  children?: ReactNode;
}

export const Menu = ({ categories, children }: MenuProps) => {
  return (
    <nav className="flex items-center justify-between bg-slate-900">
      <ul className="flex gap-1 px-1">
        <NavItem url="/">&#128054;</NavItem>
        <NavItem url="/products">All accessories</NavItem>
        {categories.map((category) => (
          // <NavItem key={category.id} url={`/categories/${category.id}`}>
          <NavItem key={category.id} url={`/products`}>
            {category.name}
          </NavItem>
        ))}
      </ul>
      <div className="mx-2 text-white">{children}</div>
    </nav>
  );
};
