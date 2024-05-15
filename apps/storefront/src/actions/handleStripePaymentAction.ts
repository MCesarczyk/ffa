"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import Stripe from "stripe";
import { getCart } from ".";

export async function handleStripePaymentAction() {

  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("Missing STRIPE_SECRET_KEY env variable");
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2024-04-10",
    typescript: true,
  });

  const cart = await getCart();
  if (!cart) {
    return;
  }

  // const session = await stripe.checkout.sessions.create({
  //   metadata: {
  //     cartId: cart.id,
  //   },
  //   line_items: cart.orderItems
  //     .map((item) =>
  //       item.product
  //         ? {
  //           price_data: {
  //             currency: "usd",
  //             product_data: {
  //               name: item.product.name,
  //               description: item.product.description,
  //               images: item.product.images.map((i) => i.url),
  //             },
  //             unit_amount: item.product.price,
  //           },
  //           quantity: item.quantity,
  //         }
  //         : null,
  //     )
  //     .filter(Boolean),
  //   mode: "payment",
  //   success_url: `http://localhost:3000/cart/success?session_id={CHECKOUT_SESSION_ID}`,
  //   cancel_url: `http://localhost:3000/cart/canceled`,
  // });
  // if (session.url) {
  //   cookies().set("cartId", "");
  //   redirect(session.url);
  // }
}
