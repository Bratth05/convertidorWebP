import type { Metadata } from "next";
import Navbar from "@/components/navbar";
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
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
