export default function Heading({
  level,
  children,
}: {
  children: React.ReactNode;
  level: number;
}) {
  return level === 1 ? (
    <h1 className="text-5xl font-bold mb-8 text-center text-purple-700">
      {children}
    </h1>
  ) : level === 2 ? (
    <h2 className="text-3xl font-bold my-2">{children}</h2>
  ) : level === 3 ? (
    <h3 className="text-2xl font-bold my-2">{children}</h3>
  ) : level === 4 ? (
    <h4 className="text-xl font-bold">{children}</h4>
  ) : (
    <h5 className="text-lg font-bold">{children}</h5>
  );
}
