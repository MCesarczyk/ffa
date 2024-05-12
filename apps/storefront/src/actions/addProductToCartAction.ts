"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { CartCreateDocument, CartGetByIdDocument, CartPublishDocument, OrderItemCreateDocument, OrderItemPublishDocument, ProductGetByIdDocument, executeGraphql } from "@ffa/graphql-client";

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

  const { createOrder: newCart } = await executeGraphql(CartCreateDocument, { total: 0 });
  if (!newCart) {
    throw new Error("Failed to create cart");
  }

  const { publishOrder: publishedCart } = await executeGraphql(CartPublishDocument, { id: newCart.id })
  if (!publishedCart) {
    throw new Error("Failed to publish cart");
  }

  console.log(`Created new cart ${publishedCart.id}`);

  cookies().set("cartId", publishedCart.id);
  return publishedCart;
}

async function addProductToCart(cartId: string, productId: string) {
  const { product } = await executeGraphql(ProductGetByIdDocument, {
    id: productId,
  });

  if (!product) {
    throw new Error(`Product with id ${productId} not found`);
  }

  const { createOrderItem: orderItem } = await executeGraphql(OrderItemCreateDocument, {
    cartId,
    productId,
    total: product.price || 0,
  });

  if (!orderItem) {
    throw new Error("Failed to add product to cart");
  }

  const { publishOrderItem: publishedOrderItem } = await executeGraphql(OrderItemPublishDocument, { id: orderItem.id });
  if (!publishedOrderItem) {
    throw new Error("Failed to publish order item");
  }

  console.log(`Product ${product.id} added to cart`);
  revalidatePath(`/cart`);
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

  await addProductToCart(cart.id, productId as string);
}
