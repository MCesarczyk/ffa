"use server";

import { cookies } from "next/headers";
import { CartCreateDocument, CartGetByIdDocument, CartPublishDocument, executeGraphql } from "@ffa/graphql-client";

export async function getOrCreateCart() {
  const cartId = cookies().get("cartId")?.value;
  if (cartId) {
    const { order: cart } = await executeGraphql(CartGetByIdDocument, {
      id: cartId,
    });

    if (cart) {
      return cart;
    }
  }

  console.log("Creating new cart");

  const { createOrder: newCart } = await executeGraphql(CartCreateDocument, { total: 0 });
  if (!newCart) {
    throw new Error("Failed to create cart");
  }

  const { publishOrder: publishedCart } = await executeGraphql(CartPublishDocument, { id: newCart.id })
  if (!publishedCart) {
    throw new Error("Failed to publish cart");
  }

  cookies().set("cartId", publishedCart.id);
  return publishedCart;
}

export async function addProductToCartAction(formData: FormData) {

  const cart = await getOrCreateCart();

  if (!cart) {
    throw new Error("Failed to get or create cart");
  }

  if (!formData.has("productId")) {
    throw new Error("productId is required");
  }

  const productId = formData.get("productId");

  console.log(`Ready to add product ${productId} to cart`);
  console.log(`Cart id: ${cart.id}`);
}
