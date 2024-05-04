import { NavItem } from '../navItem';

export const Menu = () => {
  return (
    <nav>
      <ul className="flex gap-1 bg-slate-900 px-1">
        <NavItem url="/">&#128054;</NavItem>
        <NavItem url="/dogs">Dogs</NavItem>
        <NavItem url="/products/1">Products</NavItem>
      </ul>
    </nav>
  );
};
