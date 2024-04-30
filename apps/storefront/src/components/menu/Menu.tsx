import { NavItem } from '../navItem';

export const Menu = () => {
  return (
    <nav>
      <ul className="flex gap-1 bg-slate-900 px-1">
        <NavItem url="/">Home</NavItem>
        <NavItem url="/products">Products</NavItem>
        <NavItem url="/contact">Contact</NavItem>
      </ul>
    </nav>
  );
};
