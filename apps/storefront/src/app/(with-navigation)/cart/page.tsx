export const dynamic = 'force-dynamic';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { currentUser } from '@clerk/nextjs/server';
import { getCartById } from '../../../cart/actions';
import { Cart } from './Cart';
import Link from 'next/link';

export default async function CartPage() {
  const cartId = cookies().get('cartId')?.value;

  const user = await currentUser();

  if (!cartId) {
    redirect('/');
  }

  const cart = await getCartById();

  if (!cart) {
    redirect('/');
  }

  const onFormSubmit = async () => {
    'use server';

    return redirect('/cart/checkout');
  };

  return (
    <div className="p-24">
      <Cart cart={cart} />
      <form action={onFormSubmit}>
        <button className="bg-blue-700 text-white p-4 rounded-md mt-4 hover:bg-blue-500 focus:bg-blue-800 w-full">
          Checkout
        </button>
      </form>
      {user && (
        <Link
          className="block text-center bg-blue-300 text-black p-4 rounded-md mt-4 hover:bg-blue-200 focus:bg-blue-400 w-full"
          href="/orders"
        >
          View Orders
        </Link>
      )}
    </div>
  );
}
