"use server";

import { OrderItemDeleteDocument, OrderItemPublishDocument, OrderItemUpdateQuantityDocument, executeGraphql } from "@ffa/graphql-client";
import { revalidatePath } from "next/cache";

export const changeItemQuantity = (itemId: string, quantity: number) => {
  const response = executeGraphql(OrderItemUpdateQuantityDocument, { id: itemId, quantity, total: 0 });
  executeGraphql(OrderItemPublishDocument, { id: itemId });
  revalidatePath(`/cart`);

  return response;
}

export const removeItem = (itemId: string) => {
  const response = executeGraphql(OrderItemDeleteDocument, { id: itemId });
  revalidatePath(`/cart`);

  return response;
}
