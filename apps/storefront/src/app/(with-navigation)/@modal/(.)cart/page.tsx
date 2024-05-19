import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { currentUser } from '@clerk/nextjs/server';
import { Overlay } from '../../../../components';
import { getCartById } from '../../../../cart/actions';
import { Cart } from '../../cart/Cart';
import { ConfirmButton } from './ConfirmButton';

export default async function ModalCart() {
  const cartId = cookies().get('cartId')?.value;

  const user = await currentUser();

  if (!cartId) {
    redirect('/');
  }

  const cart = await getCartById();

  if (!cart) {
    redirect('/');
  }

  return (
    <>
      <Overlay />
      <div className="absolute right-0 top-0 z-50 h-full w-full max-w-sm bg-white opacity-70 text-black p-8">
        <Cart cart={cart} />
        {user && <ConfirmButton />}
      </div>
    </>
  );
}
