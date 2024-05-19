import { notFound } from 'next/navigation';
import { getCategoryDetailsWithProductsListBySlug } from '../../../../../categories/api';
import { Pagination, ProductsList } from '../../../../../components';
import { Suspense } from 'react';

interface CategoryPageProps {
  params: {
    categorySlug: string;
    pageId: string;
  };
}

export default async function CategoryPage({
  params: { categorySlug, pageId },
}: CategoryPageProps) {
  const categories = await getCategoryDetailsWithProductsListBySlug(
    categorySlug,
    pageId ? Number(pageId) : 1,
    4
  );

  const allProductsInCategory = await getCategoryDetailsWithProductsListBySlug(
    categorySlug
  );
  const totalPages =
    Math.floor(allProductsInCategory[0].products.length / 4) || 1;

  if (!categories) {
    return notFound();
  }

  const category = categories[0];

  return (
    <div>
      <Suspense>
        <ProductsList products={category.products} />
      </Suspense>
      <Pagination totalPages={totalPages} path={`category/${category.slug}`} />
    </div>
  );
}
