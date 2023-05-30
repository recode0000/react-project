export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="m-4 font-bold bg-gray-500">{children}</div>;
}