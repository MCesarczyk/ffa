export interface CartDto {
  id: string;
  total?: number | null | undefined;
  orderItems: {
    id: string;
    quantity?: number | null | undefined;
    total?: number | null | undefined;
    product?: {
      id: string;
      name?: string | null | undefined;
      price?: number | null | undefined;
    } | null | undefined;
  }[];
}
