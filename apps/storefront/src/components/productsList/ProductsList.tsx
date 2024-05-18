import { ProductListItem } from '../../components/productListItem';
import { type ProductDto } from '../../products/types';

interface ProductsListProps {
  products: ProductDto[];
}

export async function ProductsList({ products }: ProductsListProps) {
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
