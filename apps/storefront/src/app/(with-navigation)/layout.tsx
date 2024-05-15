import Link from 'next/link';
import { Footer, Menu } from '../../components';
import { getCart } from '../../actions';

export default async function NavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cart = await getCart();

  const count = cart?.orderItems.length || 0;
  return (
    <div className="min-h-screen flex flex-col">
      <Menu>
        <Link href="/cart">&#x1F6D2; {count}</Link>
      </Menu>
      <main className="flex flex-col items-center justify-between p-2 md:p-8 xl:p-16 bg-slate-300 h-full grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
