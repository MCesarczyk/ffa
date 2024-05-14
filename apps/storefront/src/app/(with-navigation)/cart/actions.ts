"use server";

import { OrderItemDeleteDocument, OrderItemPublishDocument, OrderItemUpdateQuantityDocument, executeGraphql } from "@ffa/graphql-client";
import { revalidatePath } from "next/cache";

export const changeItemQuantity = (itemId: string, quantity: number) => {
  const response = executeGraphql({ query: OrderItemUpdateQuantityDocument, variables: { id: itemId, quantity, total: 0 } });
  executeGraphql({ query: OrderItemPublishDocument, variables: { id: itemId } });
  revalidatePath(`/cart`);

  return response;
}

export const removeItem = (itemId: string) => {
  const response = executeGraphql({ query: OrderItemDeleteDocument, variables: { id: itemId } });
  revalidatePath(`/cart`);

  return response;
}
