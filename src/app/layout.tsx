import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hostal",
  description: "Tacna Heroica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased h-dvh">
        {children}
      </body>
    </html>
  );
}
