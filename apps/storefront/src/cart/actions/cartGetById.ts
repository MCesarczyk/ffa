"use server";

import { CartGetByIdDocument, executeGraphql } from "@ffa/graphql-client";
import { cookies } from "next/headers";

export const getCartById = async () => {
  const cartId = cookies().get("cartId")?.value;

  if (!cartId) {
    return;
  }

  const cart = await executeGraphql({
    query: CartGetByIdDocument,
    variables: {
      id: cartId,
    },
    cache: "no-store",
    next: {
      tags: ["cart"],
    },
  });

  if (!cart.order) {
    return;
  }
  return cart.order;
};
