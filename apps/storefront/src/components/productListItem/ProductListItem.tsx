import Link from 'next/link';
import { type ProductDto } from '../../products/types';
import { CoverImage } from '../coverImage';
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
