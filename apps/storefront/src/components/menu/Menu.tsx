import { type ReactNode } from 'react';
import { NavItem } from '../navItem';

interface MenuProps {
  children?: ReactNode;
}

export const Menu = ({ children }: MenuProps) => {
  return (
    <nav className="flex items-center justify-between bg-slate-900">
      <ul className="flex gap-1 px-1">
        <NavItem url="/">&#128054;</NavItem>
        <NavItem url="/dogs">Dogs</NavItem>
        <NavItem url="/products">Accessories</NavItem>
      </ul>
      <div className="mx-2 text-white">{children}</div>
    </nav>
  );
};
