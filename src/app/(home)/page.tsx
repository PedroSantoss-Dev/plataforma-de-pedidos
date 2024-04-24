import Hero from "./components/hero";
import Categories from "@/components/categories";
import SectionTitle from "./components/section-title";
import { prismaClient } from "@/lib/prisma";
import ProductList from "@/components/products";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });
  const pizzas = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "pizzas",
      },
    },
  });
  const hamburgers = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "hamburgers",
      },
    },
  });
  const combos = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "combo",
      },
    },
  });
  const bebidas = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "bebidas",
      },
    },
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-10 ">
      <Hero />
      <div className="my-4">
        <Categories />
      </div>
      <div className=" w-full my-8">
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>
      <div className=" w-full my-8">
        <SectionTitle>Pizzas</SectionTitle>
        <ProductList products={pizzas} />
      </div>
      <div className=" w-full my-8">
        <SectionTitle>Hamburgers</SectionTitle>
        <ProductList products={hamburgers} />
      </div>
      <div className=" w-full my-8">
        <SectionTitle>Combos</SectionTitle>
        <ProductList products={combos} />
      </div>
      <div className=" w-full my-8">
        <SectionTitle>Bebidas</SectionTitle>
        <ProductList products={bebidas} />
      </div>
    </main>
  );
}
