"use server";

import { OrderItemDeleteDocument, executeGraphql } from "@ffa/graphql-client";
import { revalidatePath } from "next/cache";

export const removeItem = (itemId: string) => {
  const response = executeGraphql({ query: OrderItemDeleteDocument, variables: { id: itemId } });
  revalidatePath(`/cart`);

  return response;
}
