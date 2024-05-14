import Link from 'next/link';
import { Footer, Menu } from '../../components';
import { CartGetByIdDocument, executeGraphql } from '@ffa/graphql-client';
import { cookies } from 'next/headers';

export default async function NavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cartId = cookies().get('cartId')?.value;
  const cart = cartId
    ? await executeGraphql({
        query: CartGetByIdDocument,
        variables: {
          id: cartId,
          status: 'PENDING',
        },
        next: {
          tag: ['cart'],
        },
      })
    : null;

  const count = cart?.order?.orderItems.length || 0;
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
