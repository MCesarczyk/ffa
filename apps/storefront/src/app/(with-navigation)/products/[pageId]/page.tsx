import { Suspense } from 'react';
import { ProductsList } from './ProductsList';
import { getProducts } from '../../../../products/api';
import { Pagination } from '../../../../components';

interface ProductsPageProps {
  params: {
    pageId: string;
  };
}

export default async function ProductsPage({
  params: { pageId },
}: ProductsPageProps) {
  const results = await getProducts(0);
  const totalPages = Math.ceil(results.length / 4);

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">Products list</h2>
      <Suspense>
        <ProductsList page={Number(pageId)} />
      </Suspense>
      <Pagination totalPages={totalPages} />
    </div>
  );
}
