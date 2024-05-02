/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import { getProducts, getProduct } from '../../../../products/api';

export async function generateMetadata({
  params,
}: {
  params: { productId: string };
}): Promise<Metadata> {
  const product = await getProduct(params.productId);

  return {
    title: product.title,
  };
}

export async function generateStaticParams() {
  return await getProducts();
}

export default async function SingleProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const product = await getProduct(params.productId);

  return (
    <main className="mx-auto max-w-xl flex flex-col gap-4">
      <h1 className="mb-4 text-3xl font-bold">{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        width={400}
        height={400}
        className="aspect-square"
      />
      <p className="italic">{product.description}</p>
      <div className="flex flex-col md:flex-row justify-between">
        <p>Price: ${product.price}</p>
        <p>
          Rate: {product.rating.rate}
          {'/'}
          <span className="text-xs">{product.rating.count}</span>
        </p>
      </div>
      <p className="italic text-sm">{product.longDescription}</p>
    </main>
  );
}
