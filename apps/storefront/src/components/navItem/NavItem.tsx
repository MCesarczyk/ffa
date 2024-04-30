import Link from 'next/link';

interface NavItemProps {
  url: string;
  children: string;
}

export const NavItem = ({ url, children }: NavItemProps) => {
  return (
    <li className="block text-white font-bold bg-blue-700 hover:bg-blue-600 active:bg-blue-800 px-4 py-2">
      <Link href={url}>{children}</Link>
    </li>
  );
};
