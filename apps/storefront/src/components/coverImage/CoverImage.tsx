import NextImage from 'next/image';

/* eslint-disable @next/next/no-img-element */
export const CoverImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="aspect-square self-start overflow-hidden rounded-md bg-slate-50 hover:bg-slate-100 text-black">
      <NextImage
        width={320}
        height={320}
        src={src}
        alt={alt}
        className="object-cover object-center p-4 h-full w-full"
      />
    </div>
  );
};
