import { ProductGetByIdDocument, ProductsGetListDocument, executeGraphql } from "@ffa/graphql-client";
import { ProductDetailsDto, ProductDto } from "./types";

export const getProducts = async (page?: number, perPage?: number): Promise<ProductDto[]> => {
  const first = perPage || 100;
  const skip = first && page ? first * page - 1 : 0;
  const { products } = await executeGraphql(ProductsGetListDocument, { first, skip });

  return products as ProductDto[];
};

export const getProduct = async (productId: string): Promise<ProductDetailsDto> => {
  const { product } = await executeGraphql(ProductGetByIdDocument, { id: productId });

  return product as ProductDetailsDto;
};
