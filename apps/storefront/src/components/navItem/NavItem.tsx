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
    <li key={url}>
      <Link href={url} aria-current={isPathanameActive}>
        <div
          className={`block ${
            isPathanameActive ? 'text-red-600' : 'text-white'
          } text-xl font-bold bg-blue-700 hover:bg-blue-600 active:bg-blue-800 px-4 py-1`}
        >
          {children}
        </div>
      </Link>
    </li>
  );
};
