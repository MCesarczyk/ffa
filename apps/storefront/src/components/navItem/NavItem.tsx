'use client';

import { ReactNode } from 'react';
import { Route } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItemProps<T extends string> {
  url: Route<T>;
  children: ReactNode;
}

export const NavItem = <T extends string>({
  url,
  children,
}: NavItemProps<T>) => {
  const pathname = usePathname();

  const isPathanameActive = pathname?.endsWith(url);

  return (
    <li
      key={url}
      className={`block ${
        isPathanameActive ? 'text-red-600' : 'text-white'
      } font-bold bg-blue-700 hover:bg-blue-600 active:bg-blue-800 px-4 py-2`}
    >
      <Link href={url} aria-current={isPathanameActive}>
        {children}
      </Link>
    </li>
  );
};
