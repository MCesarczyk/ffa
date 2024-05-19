interface ProductListItemDescriptionProps {
  product: {
    name: string;
    price: string;
    category: {
      name: string;
    };
  };
}

export const ProductListItemDescription = ({
  product,
}: ProductListItemDescriptionProps) => {
  const { name, category, price } = product;

  return (
    <div className="px-4">
      <h3 className="text-sm font-semibold text-gray-700">{name}</h3>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between text-xs">
        <p className="text-gray-500">{category.name}</p>
        <p>Price: ${price}</p>
      </div>
    </div>
  );
};
