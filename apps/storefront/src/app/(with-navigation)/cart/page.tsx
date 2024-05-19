export const dynamic = 'force-dynamic';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getCartById } from '../../../cart/actions';
import { Cart } from './Cart';

export default async function CartPage() {
  const cartId = cookies().get('cartId')?.value;

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
    </div>
  );
}
