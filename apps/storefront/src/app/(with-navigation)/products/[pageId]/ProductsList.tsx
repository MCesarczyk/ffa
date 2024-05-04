import { notFound } from 'next/navigation';
import { ProductsGetListDocument, executeGraphql } from '@ffa/graphql-client';
import { ProductListItem } from '../../../../components/productListItem';
import { ProductDto } from '../../../../products/types';

export async function ProductsList({ page }: { page: number }) {
  const { products } = await executeGraphql(ProductsGetListDocument, {});

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
