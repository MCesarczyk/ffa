/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import { getDogById } from '../../../../dogs/api';
import NextImage from 'next/image';

export async function generateMetadata({
  params,
}: {
  params: { dogId: string };
}): Promise<Metadata> {
  const dog = await getDogById(params.dogId);

  return {
    title: dog.name,
    description: `Breed: ${dog.breed || 'Unknown'}`,
  };
}

export default async function DogDetailsPage({
  params,
}: {
  params: { dogId: string };
}) {
  const dog = await getDogById(params.dogId);

  return (
    <main className="mx-auto max-w-xl flex flex-col gap-4">
      <h1 className="mb-4 text-3xl font-bold">{dog.name}</h1>
      <NextImage
        src={dog.image.url}
        alt={dog.name}
        width={400}
        height={400}
        className="object-cover object-center p-4 h-full w-full"
      />
      <p className="italic">{dog.breed}</p>
      <div className="flex flex-col md:flex-row justify-between">
        <p>Price: ${dog.price}</p>
      </div>
    </main>
  );
}
