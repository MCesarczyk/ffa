import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { Overlay } from '../../../../components';
import { getCart } from '../../../../cart/actions';
import { Cart } from '../../cart/Cart';

export default async function ModalCart() {
  const cartId = cookies().get('cartId')?.value;

  if (!cartId) {
    redirect('/');
  }

  const cart = await getCart();

  if (!cart) {
    redirect('/');
  }

  return (
    <>
      <Overlay />
      <div className="absolute right-0 top-0 z-50 h-full w-full max-w-sm bg-white opacity-70 text-black p-8">
        <Cart cart={cart} />
      </div>
    </>
  );
}
