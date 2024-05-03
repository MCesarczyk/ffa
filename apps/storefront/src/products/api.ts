import { ProductDto } from "./types";

const API_BASE_URL = `https://naszsklep-api.vercel.app/api/products`;

export const getProducts = async (take?: number, offset?: number): Promise<ProductDto[]> => {
  const res = await fetch(`${API_BASE_URL}${take ? `?take=${take}` : ''}${take && offset ? `&offset=${offset}` : ''}`);
  const products = await res.json();

  return products;
};

export const getProduct = async (productId: string): Promise<ProductDto> => {
  const res = await fetch(`${API_BASE_URL}/${productId}`);
  const product = await res.json();

  return product;
};
