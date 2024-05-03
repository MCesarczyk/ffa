import { getProducts } from '../../../../products/api';
import { ProductListItem } from '../../../../components/productListItem';

export async function ProductsList({ page }: { page: number }) {
  const products = await getProducts(page, 4);

  return (
    <ul className="flex gap-2 flex-wrap justify-center">
      {products.map((product) => (
        <ProductListItem
          key={product.id}
          product={{
            id: product.id,
            name: product.title,
            category: product.category,
            price: String(product.price),
            coverImage: {
              src: `https://source.unsplash.com/400x400/?${product.title}`,
              alt: product.title,
            },
          }}
        />
      ))}
    </ul>
  );
}
