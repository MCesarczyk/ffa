import { Footer, Menu } from '../../components';

export default function NavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <Menu />
      <main className="flex flex-col items-center justify-between p-2 md:p-8 xl:p-16 bg-slate-300 h-full grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
