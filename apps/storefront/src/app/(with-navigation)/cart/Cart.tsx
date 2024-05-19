export const dynamic = 'force-dynamic';

import { formatMoney } from '../../../utils';
import { type CartDto } from '../../../cart/types';
import { UpdateButtons } from './UpdateButtons';

interface CartProps {
  cart: CartDto;
}

export function Cart({ cart }: CartProps) {
  return (
    <>
      <h1 className="text-lg font-bold py-8">Order #{cart.id} summary</h1>
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
              <tr key={item.id} className="flex flex-wrap gap-2 p-2">
                <td className="text-sm pr-4">{item.product.name}</td>
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
    </>
  );
}
