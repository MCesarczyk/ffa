export default function NavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 md:p-8 xl:p-16 bg-slate-300">
      {children}
    </main>
  );
}
