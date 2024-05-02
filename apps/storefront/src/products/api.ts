import { ProductDto } from "./types";

const API_BASE_URL = `https://naszsklep-api.vercel.app/api/products`;

export const getProducts = async (): Promise<ProductDto[]> => {
  const res = await fetch(API_BASE_URL);
  const products = await res.json();

  return products;
};

export const getProduct = async (productId: string): Promise<ProductDto> => {
  const res = await fetch(`${API_BASE_URL}/${productId}`);
  const product = await res.json();

  return product;
};
