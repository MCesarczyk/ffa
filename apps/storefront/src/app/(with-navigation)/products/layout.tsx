import { type ReactNode, Suspense } from 'react';
import { notFound } from 'next/navigation';
import { ProductsList } from '../../../components';
import { getProducts } from '../../../products/api';

export default async function ProductsLayout({
  children,
}: {
  children: ReactNode;
}) {
  const products = await getProducts(2, 4);

  if (!products) {
    return notFound();
  }

  return (
    <div className="mx-auto grow grid w-full max-w-7xl grid-cols-12 gap-x-4 bg-white">
      <aside className="col-span-3 p-4 shadow-xl hidden md:block">
        <h2 className="mb-4 text-xl font-bold">Popular products</h2>
        <Suspense>
          <ProductsList products={products} />
        </Suspense>
      </aside>
      <main className="col-span-12 md:col-span-9 p-4 shadow-xl">
        {children}
      </main>
    </div>
  );
}
