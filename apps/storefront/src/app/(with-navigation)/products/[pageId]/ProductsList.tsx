import { notFound } from 'next/navigation';
import { ProductListItem } from '../../../../components/productListItem';
import { ProductDto } from '../../../../products/types';
import { getProducts } from '../../../../products/api';

export async function ProductsList({ page }: { page: number }) {
  const products = await getProducts(page, 4);

  if (!products) {
    return notFound();
  }

  return (
    <ul className="flex gap-2 flex-wrap justify-center">
      {products.map((product) => (
        <ProductListItem
          key={product.id}
          product={
            {
              ...product,
            } as ProductDto
          }
        />
      ))}
    </ul>
  );
}
