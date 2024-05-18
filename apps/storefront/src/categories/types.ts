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
