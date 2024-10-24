export default async function RSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="animate-appear mx-auto w-full max-w-7xl">
      <div className="px-4 py-2">{children}</div>
    </div>
  );
}
