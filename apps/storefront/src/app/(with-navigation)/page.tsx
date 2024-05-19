import React from 'react';
import Link from 'next/link';
import { type Route } from 'next';
import { CoverImage } from '../../components/coverImage';
import { getCategories } from '../../categories/api';

export default async function HomePage() {
  const category = await getCategories();

  return (
    <div>
      <ul className="grid md:grid-cols-2 gap-8 m-8">
        <li>
          <Link href="/products/1">
            <h2 className="text-3xl font-bold text-center">All accessories</h2>
            <CoverImage src="/stuff.avif" alt="dog stuff" />
          </Link>
        </li>
        {category.map((category) => (
          <li key={category.id}>
            <Link href={`/category/${category.slug}` as Route<string>}>
              <h2 className="text-3xl font-bold text-center">
                {category.name}
              </h2>
              <CoverImage src={category.cover.url} alt={category.name} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
