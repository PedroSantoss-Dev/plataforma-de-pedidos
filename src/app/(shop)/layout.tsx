import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../../app/globals.css";
import Favicon from '../../../public/favicon.ico';
import Header from "@/components/header";
import Footer from "@/components/footer";

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
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
