import type { Metadata } from 'next';
import NextImage from 'next/image';
import { getProduct } from '../../../../products/api';
import { addProductToCartAction } from '../../../../actions/cartAddProduct';

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
      <div className="flex flex-col md:flex-row gap-2 justify-between">
        <h1 className="mb-4 text-xl sm:text-2xl md:text-3xl font-bold">
          {product.name}
        </h1>
        <form action={addProductToCartAction}>
          <input
            type="text"
            name="productId"
            value={product.id}
            hidden
            readOnly
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add to Cart
          </button>
        </form>
      </div>
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
