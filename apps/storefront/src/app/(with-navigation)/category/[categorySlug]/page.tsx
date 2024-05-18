import { notFound } from 'next/navigation';
import { getCategoryDetailsWithProductsListBySlug } from '../../../../categories/api';
import { ProductsList } from '../../../../components';

interface CategoryPageProps {
  params: {
    categorySlug: string;
  };
}

export default async function CategoryPage({
  params: { categorySlug },
}: CategoryPageProps) {
  const categories = await getCategoryDetailsWithProductsListBySlug(
    categorySlug,
    10
  );

  if (!categories) {
    return notFound();
  }

  const category = categories[0];

  return (
    <div>
      <h1>{category.name}</h1>
      <ProductsList products={category.products} />
    </div>
  );
}
