import Link from 'next/link';
import { CoverImage } from '../coverImage';
import { DogListItemDescription } from './DogListItemDescription';
import { type DogDto } from '../../dogs/types';

interface DogListItemProps {
  dog: DogDto;
}

export const DogListItem = ({ dog }: DogListItemProps) => {
  const { name, breed, price, image } = dog;

  return (
    <li>
      <article>
        <Link href={`/dog/${dog.id}`}>
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
