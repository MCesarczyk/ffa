import { ProductListItem } from '@ffa/ui';

const products = [
  {
    name: 'Dog 1',
    category: 'Category 1',
    price: '$999999999',
    coverImage: {
      src: 'dog1.avif',
      alt: 'Happy dog with a pink tongue sitting on a white surface',
    },
  },
  {
    name: 'Dog 2',
    category: 'Category 2',
    price: '$999999999',
    coverImage: {
      src: 'dog2.avif',
      alt: 'Three youg golden retriever puppies sitting on the ground',
    },
  },
  {
    name: 'Dog 3',
    category: 'Category 3',
    price: '$999999999',
    coverImage: {
      src: 'dog3.avif',
      alt: 'Two young puppies playing in the grass',
    },
  },
  {
    name: 'Dog 4',
    category: 'Category 4',
    price: '$999999999',
    coverImage: {
      src: 'dog4.avif',
      alt: 'Adult husky looking at the camera with a curiosity',
    },
  },
];

export default function Home() {
  return (
    <section className="">
      <ul className="list-none mx-auto gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {products.map((product, index) => (
          <ProductListItem key={index} product={product} />
        ))}
      </ul>
    </section>
  );
}
