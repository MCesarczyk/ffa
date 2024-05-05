import { notFound } from 'next/navigation';
import { DogListItem } from '../../../components/dogListItem';
import { DogDto } from '../../../dogs/types';
import { getDogs } from '../../../dogs/api';

export default async function Home() {
  const dogs = await getDogs();

  if (!dogs) {
    return notFound();
  }

  return (
    <section>
      <ul className="list-none mx-auto gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {dogs.map((dog, index) => (
          <DogListItem
            key={index}
            dog={{ ...dog, price: Number(dog.price) } as unknown as DogDto}
          />
        ))}
      </ul>
    </section>
  );
}
