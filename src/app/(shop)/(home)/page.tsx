import Image from "next/image";
import Hero from "./components/hero";
import Categories from "@/components/categories";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-10 ">
      <Hero />
      <div className="my-4">
        <Categories />
      </div>
    </main>
  );
}
