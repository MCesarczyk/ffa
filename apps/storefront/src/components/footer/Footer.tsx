import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="flex gap-2 justify-center px-4 pt-2 pb-8 bg-slate-300">
      <div>
        &copy; 2024{' '}
        <a
          href="http://cesarczyk.dev"
          target="_blank"
          rel="noreferrer noopener"
        >
          Cesarczyk.dev
        </a>
      </div>
      |<Link href="/privacy-policy">privacy policy</Link>|
      <Link href="/license">license</Link>
    </footer>
  );
};
