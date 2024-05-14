export const dynamic = 'force-dynamic';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { CartGetByIdDocument, executeGraphql } from '@ffa/graphql-client';
import { formatMoney } from '../../../utils';
import { UpdateButtons } from './UpdateButtons';

export default async function CartPage() {
  const cartId = cookies().get('cartId')?.value;

  if (!cartId) {
    redirect('/');
  }

  const { order: cart } = await executeGraphql({
    query: CartGetByIdDocument,
    variables: {
      id: cartId,
      status: 'PENDING',
      next: {
        revalidate: 0,
      },
    },
    next: {
      tag: ['cart'],
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
          <tr className="grid grid-cols-3 gap-2">
            <th>Product</th>
            <th>Total</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {cart.orderItems.map((item) => {
            if (!item.product?.id) {
              return null;
            }

            return (
              <tr key={item.id}>
                <td className="pr-4">{item.product.name}</td>
                {item.total ? <td>{formatMoney(item.total)}</td> : null}
                <td>
                  {item.quantity ? (
                    <UpdateButtons itemId={item.id} quantity={item.quantity} />
                  ) : null}
                </td>
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
