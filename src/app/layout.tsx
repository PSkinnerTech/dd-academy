import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />

      <body>
        <h2>Hello Route Layout </h2>
        <div className="div">{children}</div>
      </body>
    </html>
  );
}