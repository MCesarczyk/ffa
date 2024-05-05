export type ProductDto = {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: {
    url: string;
    fileName: string;
    id: string;
  };
}

export type ProductDetailsDto = ProductDto & {
  rating: number;
  rateCount: number;
  longDescription: string;
}
