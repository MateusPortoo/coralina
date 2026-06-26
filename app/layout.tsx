import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/cart";
import { CartDrawer } from "@/components/cart/CartDrawer";

export const metadata: Metadata = {
  title: "CORALINA — O verão é um estado de espírito",
  description:
    "Resortwear brasileiro premium. Estampas botânicas, linho e crochê para quem não espera a estação certa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full">
      <head>
        {/* Fontshare — Zodiak (display editorial) + Satoshi (corpo) */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=zodiak@400,600,700&f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full">
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
