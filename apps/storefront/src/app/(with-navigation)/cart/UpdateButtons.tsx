'use client';

import { useOptimistic } from 'react';
import { changeItemQuantity, removeItem } from './actions';

export function UpdateButtons({
  itemId,
  quantity,
}: {
  itemId: string;
  quantity: number;
}) {
  const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
    quantity,
    (_state, newQuantity: number) => newQuantity
  );

  return (
    <form className="flex">
      <span className="w-8 text-center" data-testid="quantity">
        {optimisticQuantity}
      </span>
      <button
        className="h-6 w-6 border"
        data-testid="increment"
        type="submit"
        formAction={async () => {
          setOptimisticQuantity(optimisticQuantity + 1);
          await changeItemQuantity(itemId, optimisticQuantity + 1);
        }}
      >
        +
      </button>
      <button
        className="h-6 w-6 border"
        data-testid="decrement"
        type="submit"
        formAction={async () => {
          setOptimisticQuantity(optimisticQuantity - 1);
          await changeItemQuantity(itemId, optimisticQuantity - 1);
        }}
      >
        -
      </button>
      <button
        className="h-6 w-6"
        formAction={async () => {
          await removeItem(itemId);
        }}
      >
        &#x1F5D1;
      </button>
    </form>
  );
}
