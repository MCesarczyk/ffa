interface ProductListItemDescriptionProps {
  product: {
    name: string;
    category: string;
    price: string;
  };
}

export const ProductListItemDescription = ({
  product,
}: ProductListItemDescriptionProps) => {
  const { name, category, price } = product;

  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-700">{name}</h3>
      <p className="text-sm text-gray-500">{category}</p>
      <p className="text-sm font-medium text-gray-900">{price}</p>
    </div>
  );
};
