"use server";

import { revalidatePath } from "next/cache";
import { OrderItemPublishDocument, OrderItemUpdateQuantityDocument, executeGraphql } from "@ffa/graphql-client";

export const changeItemQuantity = (itemId: string, quantity: number) => {
  const response = executeGraphql({ query: OrderItemUpdateQuantityDocument, variables: { id: itemId, quantity, total: 0 } });
  executeGraphql({ query: OrderItemPublishDocument, variables: { id: itemId } });
  revalidatePath(`/cart`);

  return response;
}
