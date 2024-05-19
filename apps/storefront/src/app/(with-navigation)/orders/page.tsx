import { redirect } from 'next/navigation';
import { currentUser } from '@clerk/nextjs/server';
import { getCartByUserEmail } from '../../../cart/actions';

export default async function OrderPage() {
  const user = await currentUser();
  if (!user) {
    redirect('/sign-in');
  }

  const email = user.emailAddresses[0]?.emailAddress;
  if (!email) {
    return <div>User does not have email</div>;
  }

  const orders = await getCartByUserEmail(email);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">
        {user.firstName || 'Current user'}&rsquo;s Orders
      </h1>

      {orders?.length === 0 ? (
        <div>No orders found</div>
      ) : (
        <ul>
          {orders?.map((order) => (
            <li key={order.id} className="mb-8">
              <div className="flex justify-between border-slate-400 border-b-2">
                <div>
                  <p>Created at: {String(order?.createdAt)}</p>
                  <p>Updated at: {String(order?.updatedAt)}</p>
                </div>
                <p>Total: {String(order?.total)}</p>
              </div>
              <p>Order items:</p>
              <ul className="ml-16">
                {order?.orderItems?.map((orderItem) => (
                  <li
                    key={orderItem.id}
                    className="border-slate-400 border-b-2"
                  >
                    <p>Product: {orderItem?.product?.name}</p>
                    <div className="grid grid-cols-2">
                      <p>Quantity: {orderItem?.quantity}</p>
                      <p>Subtotal: {orderItem?.total}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
