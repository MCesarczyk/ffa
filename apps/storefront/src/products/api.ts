import { ProductDto } from "./types";

const API_BASE_URL = `https://naszsklep-api.vercel.app/api/products`;

export const getProducts = async (page?: number, perPage?: number): Promise<ProductDto[]> => {
  const take = perPage;
  const offset = take && page ? take * page - 1 : 0;
  const res = await fetch(`${API_BASE_URL}${take ? `?take=${take}` : ''}${take && offset ? `&offset=${offset}` : ''}`);
  const products = await res.json();

  return products;
};

export const getProduct = async (productId: string): Promise<ProductDto> => {
  const res = await fetch(`${API_BASE_URL}/${productId}`);
  const product = await res.json();

  return product;
};
