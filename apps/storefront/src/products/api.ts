import { ProductsGetListDocument, executeGraphql } from "@ffa/graphql-client";
import { ProductDto } from "./types";

const API_BASE_URL = `https://naszsklep-api.vercel.app/api/products`;

export const getProducts = async (page?: number, perPage?: number): Promise<ProductDto[]> => {
  const first = perPage || 100;
  const skip = first && page ? first * page - 1 : 0;
  const { products } = await executeGraphql(ProductsGetListDocument, { first, skip });

  return products as ProductDto[];
};

export const getProduct = async (productId: string): Promise<ProductDto> => {
  const res = await fetch(`${API_BASE_URL}/${productId}`);
  const product = await res.json();

  return product;
};
