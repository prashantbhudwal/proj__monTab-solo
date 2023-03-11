import "./globals.css";

export const metadata = {
  title: "MonTab",
  description: "A Default Tab for Pokemon Lovers!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
