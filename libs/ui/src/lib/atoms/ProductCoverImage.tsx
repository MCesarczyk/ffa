/* eslint-disable @next/next/no-img-element */
export const ProductCoverImage = ({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) => {
  return (
    <div className="aspect-square self-start overflow-hidden rounded-md bg-slate-50 hover:bg-slate-100 text-black">
      <img
        width={320}
        height={320}
        src={src}
        alt={alt}
        className="h-full object-cover object-center p-4 "
      />
    </div>
  );
};
