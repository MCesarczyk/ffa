interface DogListItemDescriptionProps {
  product: {
    name: string;
    breed: string;
    price: string;
  };
}

export const DogListItemDescription = ({
  product,
}: DogListItemDescriptionProps) => {
  const { name, breed, price } = product;

  return (
    <div className="px-4 py-2">
      <h3 className="text-sm font-semibold text-gray-700">{name}</h3>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between text-xs">
        <p className="text-gray-500">{breed}</p>
        <p>Price: ${price}</p>
      </div>
    </div>
  );
};
