export interface DogDto {
  id: string;
  name: string;
  breed: string;
  price: string;
  image: {
    id: string;
    url: string;
    fileName: string;
  };
}
