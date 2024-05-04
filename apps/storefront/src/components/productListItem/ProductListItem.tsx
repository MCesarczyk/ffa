import Link from 'next/link';
import { CoverImage } from '../coverImage';
import { ProductDto } from '../../products/types';
import { ProductListItemDescription } from './ProductListItemDescription';

interface ProductListItemProps {
  product: ProductDto;
}

export const ProductListItem = ({ product }: ProductListItemProps) => {
  const { name, category, price, image } = product;

  return (
    <li>
      <article className="max-w-sm">
        <Link href={`/product/${product.id}`}>
          <CoverImage
            src={image.url}
            alt={image.fileName.replace('.jpg', '').replace('-', ' ')}
          />
        </Link>
        <ProductListItemDescription
          product={{ name, category, price: String(price) }}
        />
      </article>
    </li>
  );
};
