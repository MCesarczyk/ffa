"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import { CartCreateDocument, CartPublishDocument, OrderItemCreateDocument, OrderItemPublishDocument, ProductGetByIdDocument, executeGraphql } from "@ffa/graphql-client";
import { changeItemQuantity, getCartById } from ".";
import { type CartDto } from "../types";

export async function getOrCreateCart(userName: string, userEmail: string) {
  const cart = await getCartById();
  if (cart) {
    return cart;
  }

  const { createOrder: newCart } = await executeGraphql({ query: CartCreateDocument, variables: { userName, userEmail, total: 0 } });
  if (!newCart) {
    throw new Error("Failed to create cart");
  }

  const { publishOrder: publishedCart } = await executeGraphql({ query: CartPublishDocument, variables: { id: newCart.id } })
  if (!publishedCart) {
    throw new Error("Failed to publish cart");
  }

  console.log(`Created new cart ${publishedCart.id}`);

  cookies().set("cartId", publishedCart.id);
  return publishedCart;
}

async function addProductToCart(cart: CartDto, productId: string) {
  const { product } = await executeGraphql({
    query: ProductGetByIdDocument, variables: {
      id: productId,
    }
  });

  if (!product) {
    throw new Error(`Product with id ${productId} not found`);
  }

  const { createOrderItem: orderItem } = await executeGraphql({
    query: OrderItemCreateDocument, variables: {
      cartId: cart.id,
      productId,
      total: product.price || 0,
    }
  });

  if (!orderItem) {
    throw new Error("Failed to add product to cart");
  }

  const { publishOrderItem: publishedOrderItem } = await executeGraphql({ query: OrderItemPublishDocument, variables: { id: orderItem.id } });
  if (!publishedOrderItem) {
    throw new Error("Failed to publish order item");
  }

  console.log(`Product ${product.id} added to cart`);
}

export async function addProductToCartAction(formData: FormData) {
  const userName = formData.get("userName") as string;
  const userEmail = formData.get("userEmail") as string;

  const cart = await getOrCreateCart(userName, userEmail);
  if (!cart) {
    throw new Error("Failed to get or create cart");
  }

  if (!formData.has("productId")) {
    throw new Error("productId is required");
  }

  const productId = formData.get("productId");

  const productIds = cart.orderItems.map(item => item.product?.id);

  console.log(`Cart items: ${productIds}, Product id: ${productId}, IF: ${productIds.includes(productId as string)}`);

  if (productIds.includes(productId as string)) {
    const itemQuantity = cart.orderItems.find(item => item.product?.id === productId)?.quantity;
    console.log(`Item quantity: ${itemQuantity} of product ${productId}`);

    if (itemQuantity) {
      const { updateOrderItem } = await changeItemQuantity(productId as string, itemQuantity + 1);
      console.log(`Item quantity after change: ${updateOrderItem?.quantity}`);
    }

    return;
  }

  await addProductToCart(cart, productId as string);
  revalidateTag("cart");
}
