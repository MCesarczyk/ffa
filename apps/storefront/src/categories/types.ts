import { type ProductDto } from "../products/types";

export interface CategoryDto {
  id: string;
  name: string;
  slug: string;
  cover: {
    url: string;
    fileName: string;
    id: string;
  };
}

export interface CategoryWithProductsListDto {
  id: string;
  name: string;
  slug: string;
  products: ProductDto[];
}
