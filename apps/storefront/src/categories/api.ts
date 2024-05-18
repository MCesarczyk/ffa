import { CategoriesGetListDocument, executeGraphql } from "@ffa/graphql-client";
import { type CategoryDto } from "./types";

export const getCategories = async (page?: number, perPage?: number): Promise<CategoryDto[]> => {
  const first = perPage || 100;
  const skip = first && page ? first * page - 1 : 0;
  const { categories } = await executeGraphql({ query: CategoriesGetListDocument, variables: { first, skip } });

  return categories as CategoryDto[];
};
