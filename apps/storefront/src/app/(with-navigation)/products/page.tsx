import { Suspense } from 'react';
import { ProductsList } from './ProductsList';

export default async function ProductsPage() {
  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">Products list</h2>
      <Suspense>
        <ProductsList page={1} />
      </Suspense>
    </div>
  );
}
