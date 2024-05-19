import { Suspense } from 'react';
import { getProducts } from '../../../../products/api';
import { Pagination, ProductsList } from '../../../../components';
import { notFound } from 'next/navigation';

interface ProductsPageProps {
  params: {
    pageId: string;
  };
}

export async function generateStaticParams({ params }: ProductsPageProps) {
  const products = await getProducts(Number(params.pageId));
  return [...Array(Math.ceil(products.length / 4)).keys()].map((page) => ({
    pageId: String(page + 1),
  }));
}

export default async function ProductsPage({
  params: { pageId },
}: ProductsPageProps) {
  const products = await getProducts(Number(pageId), 4);
  const allProducts = await getProducts();
  const totalPages = Math.floor(allProducts.length / 4);

  if (!products) {
    return notFound();
  }

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">Products list</h2>
      <Suspense>
        <ProductsList products={products} />
      </Suspense>
      <Pagination totalPages={totalPages} path="products" />
    </div>
  );
}
