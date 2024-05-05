import React from 'react';
import Link from 'next/link';
import { CoverImage } from '../../components/coverImage';

export default function HomePage() {
  return (
    <div>
      <ul className="grid md:grid-cols-2 gap-8 m-8">
        <li>
          <Link href="/dogs">
            <h2 className="text-3xl font-bold text-center">Dogs</h2>
            <CoverImage src="/dog3.avif" alt="happy dogs" />
          </Link>
        </li>
        <li>
          <Link href="/products/1">
            <h2 className="text-3xl font-bold text-center">Accessories</h2>
            <CoverImage src="/stuff.avif" alt="dog stuff" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
