import { type ReactNode } from 'react';
import Link from 'next/link';
import { getCart } from '../../cart/actions';
import { Footer, Menu } from '../../components';
import { getCategories } from '../../categories/api';

export default async function NavLayout({
  children,
  modal,
}: Readonly<{
  children: ReactNode;
  modal: ReactNode;
}>) {
  const cart = await getCart();
  const categories = await getCategories();

  const count = cart?.orderItems.length || 0;
  return (
    <div className="min-h-screen flex flex-col">
      <Menu {...{ categories }}>
        <Link href="/cart">&#x1F6D2; {count}</Link>
      </Menu>
      <main className="flex flex-col items-center justify-between p-2 md:p-8 xl:p-16 bg-slate-300 h-full grow">
        {children}
      </main>
      <Footer />
      {modal}
    </div>
  );
}
