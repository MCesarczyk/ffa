import { Route } from 'next';
import Link from 'next/link';

interface NavItemProps<T extends string> {
  url: Route<T>;
  children: string;
}

export const NavItem = <T extends string>({
  url,
  children,
}: NavItemProps<T>) => {
  return (
    <li className="block text-white font-bold bg-blue-700 hover:bg-blue-600 active:bg-blue-800 px-4 py-2">
      <Link href={url}>{children}</Link>
    </li>
  );
};
