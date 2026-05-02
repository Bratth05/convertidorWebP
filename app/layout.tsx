import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Convertidor WebP",
  description: "Convierte imagenes a WebP con una arquitectura limpia, UI simple y una base lista para crecer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
