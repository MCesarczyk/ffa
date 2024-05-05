export interface DogDto {
  id: string;
  name: string;
  breed: string;
  price: number;
  image: {
    id: string;
    url: string;
    fileName: string;
  };
}
