import Link from 'next/link';
import { CoverImage } from '../coverImage';
import { ProductListItemDescription } from './ProductListItemDescription';

interface ProductListItemProps {
  product: {
    id: string;
    name: string;
    category: string;
    price: string;
    coverImage: {
      src: string;
      alt: string;
    };
  };
}

export const ProductListItem = ({ product }: ProductListItemProps) => {
  const { name, category, price, coverImage } = product;

  return (
    <li>
      <article>
        <Link href={`/product/${product.id}`}>
          <CoverImage src={coverImage.src} alt={coverImage.alt} />
        </Link>
        <ProductListItemDescription product={{ name, category, price }} />
      </article>
    </li>
  );
};
