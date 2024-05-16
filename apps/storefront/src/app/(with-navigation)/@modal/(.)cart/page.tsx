// export default function CartModalPage() {
//   return (
//       <ul>
//         <li>Product 1</li>
//         <li>Product 2</li>
//         <li>Product 3</li>
//       </ul>
//     </div>
//   );
// }
import { Overlay } from '../../../../components';
import { getCart } from '../../../../actions';

export default async function ModalCart() {
  const cart = await getCart();

  return (
    <>
      <Overlay />
      {/* <div className="absolute right-0 top-0 z-40 h-screen w-full max-w-sm bg-white"> */}
      <div className="absolute right-0 top-0 z-50 h-full w-full max-w-sm bg-white opacity-70 text-black p-8">
        <h2 className="text-3xl text-black p-8">Cart</h2>
        <ul>
          {cart?.orderItems.map((item) => (
            <li key={item.id}>{item.product?.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
