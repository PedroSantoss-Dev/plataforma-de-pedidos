import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Favicon from '/public/favicon.ico';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata: Metadata = {
  title: "MR Pizzas",
  description: "plataforma de pedidos de pizzas",
  icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
