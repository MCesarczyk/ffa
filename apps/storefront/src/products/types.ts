export type ProductDto = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  rating: {
    rate: number,
    count: number
  },
  image: string;
  longDescription: string;
}
