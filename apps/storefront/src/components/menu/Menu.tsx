import { NavItem } from '../navItem';

export const Menu = () => {
  return (
    <nav>
      <ul className="flex gap-1 bg-slate-900 px-1">
        <NavItem url="/">Home</NavItem>
        <NavItem url="/products/1">Products</NavItem>
        <NavItem url="/privacy-policy">Privacy policy</NavItem>
      </ul>
    </nav>
  );
};
