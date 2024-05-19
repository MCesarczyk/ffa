"use server";

import { CartGetByEmailDocument, executeGraphql } from "@ffa/graphql-client";

export const getCartByUserEmail = async (email: string) => {
  const response = await executeGraphql({
    query: CartGetByEmailDocument,
    variables: {
      email,
    },
    cache: "no-store",
    next: {
      tags: ["cart"],
    },
  });

  if (!response.orders || !Array.isArray(response.orders)) {
    return;
  }

  return response.orders;
};
