import { wait } from '../../../../utils';
import { getProducts } from '../../../../products/api';
import { ProductListItem } from '../../../../components/productListItem';

export async function ProductsList({ page }: { page: number }) {
  const take = 4;
  const offset = take * (page - 1);

  const products = await getProducts(take, offset);

  await wait(5000 * Math.random());

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
