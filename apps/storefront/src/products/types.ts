export type ProductDto = {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  rating: {
    rate: number,
    count: number
  },
  image: {
    url: string;
    fileName: string;
    id: string;
  };
  longDescription: string;
}
