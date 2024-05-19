import { redirect } from 'next/navigation';

interface CategoryPageProps {
  params: {
    categorySlug: string;
  };
}

export default function CategoryPage({
  params: { categorySlug },
}: CategoryPageProps) {
  redirect(`/category/${categorySlug}/1`);

  return null;
}
