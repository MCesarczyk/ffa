import { redirect } from 'next/navigation';

export default function ProductsPage() {
  redirect('/products/1');

  return null;
}
