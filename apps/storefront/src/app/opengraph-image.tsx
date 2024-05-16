import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Furry Friend Area Shop';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function og() {
  return new ImageResponse(
    (
      <div
        tw="w-full text-white h-full flex flex-col items-center justify-center"
        style={{
          background: `
				    linear-gradient(
				      90deg,
				      rgb(6,172,214) 0%,
				      rgb(0,0,0) 20%,
				      rgb(0,0,0) 80%,
				      rgb(6,71,255) 100%
				    )`,
        }}
      >
        <h2 tw="font-sans uppercase m-0 p-0 text-8xl leading-4 mb-16">
          Furry Friend Area
        </h2>
        <p tw="font-serif m-0 p-0 font-black text-6xl">
          The best for your dog &#x1F436;
        </p>
      </div>
    )
  );
}
