'use client';

import { Route } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItemProps<T extends string> {
  url: Route<T>;
  children: string;
}

export const NavItem = <T extends string>({
  url,
  children,
}: NavItemProps<T>) => {
  const pathname = usePathname();

  return (
    <li
      className={`block ${
        pathname === url ? 'text-red-600' : 'text-white'
      } font-bold bg-blue-700 hover:bg-blue-600 active:bg-blue-800 px-4 py-2`}
    >
      <Link href={url} aria-current={pathname === url}>
        {children}
      </Link>
    </li>
  );
};
