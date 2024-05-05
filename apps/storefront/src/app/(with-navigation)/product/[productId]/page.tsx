/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import { getProduct } from '../../../../products/api';
import NextImage from 'next/image';

export async function generateMetadata({
  params,
}: {
  params: { productId: string };
}): Promise<Metadata> {
  const product = await getProduct(params.productId);

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function SingleProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const product = await getProduct(params.productId);

  return (
    <main className="mx-auto max-w-xl flex flex-col gap-4">
      <h1 className="mb-4 text-3xl font-bold">{product.name}</h1>
      <NextImage
        src={product.image.url}
        alt={product.name}
        width={400}
        height={400}
        className="object-cover object-center p-4 h-full w-fulls"
      />
      <p className="italic">{product.description}</p>
      <div className="flex flex-col md:flex-row justify-between">
        <p>Price: ${product.price}</p>
        <p>
          Rate: {product.rating}
          {'/'}
          <span className="text-xs">{product.rateCount}</span>
        </p>
      </div>
      <p className="italic text-sm">{product.longDescription}</p>
    </main>
  );
}
