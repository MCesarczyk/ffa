export const dynamic = 'force-dynamic';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { CartGetByIdDocument, executeGraphql } from '@ffa/graphql-client';
import { formatMoney } from '../../../utils';

export default async function CartPage() {
  const cartId = cookies().get('cartId')?.value;

  if (!cartId) {
    redirect('/');
  }

  const { order: cart } = await executeGraphql(CartGetByIdDocument, {
    id: cartId,
    status: 'PENDING',
    next: {
      revalidate: 0,
    },
  });

  if (!cart) {
    redirect('/');
  }

  const onFormSubmit = async () => {
    'use server';

    return redirect('/cart/checkout');
  };

  return (
    <div className="p-24">
      <h1>Order #{cart.id} summary</h1>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total:</th>
          </tr>
        </thead>
        <tbody>
          {cart.orderItems.map((item) => {
            if (!item.product?.id) {
              return null;
            }

            return (
              <tr key={item.id}>
                <td>{item.quantity}</td>
                <td>{formatMoney(item.total || 0)}</td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <form action={onFormSubmit}>
        <button className="bg-blue-700 text-white p-4 rounded-md mt-4 hover:bg-blue-500 focus:bg-blue-800 w-full">
          Checkout
        </button>
      </form>
    </div>
  );
}
