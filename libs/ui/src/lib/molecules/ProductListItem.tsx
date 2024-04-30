import { ProductCoverImage, ProductListItemDescription } from "@/ui/atoms";

interface ProductListItemProps {
  product: {
    name: string;
    category: string;
    price: string;
    coverImage: {
      src: string;
      alt: string;
    };
  };
}

export const ProductListItem = ({ product }: ProductListItemProps) => {
  const { name, category, price, coverImage } = product;

  return (
    <li>
      <article>
        <ProductCoverImage src={coverImage.src} alt={coverImage.alt} />
        <ProductListItemDescription product={{ name, category, price }} />
      </article>
    </li>
  );
};
