import Link from 'next/link';
import { CoverImage } from '../coverImage';
import { DogListItemDescription } from './DogListItemDescription';
import { DogDto } from '../../dogs/types';

interface DogListItemProps {
  dog: DogDto;
}

export const DogListItem = ({ dog: product }: DogListItemProps) => {
  const { name, breed, price, image } = product;

  return (
    <li>
      <article>
        <Link href={`/product/${product.id}`}>
          <CoverImage
            src={image.url}
            alt={image.fileName.replace('.webp', '').replace('-', ' ')}
          />
        </Link>
        <DogListItemDescription product={{ name, breed, price }} />
      </article>
    </li>
  );
};
