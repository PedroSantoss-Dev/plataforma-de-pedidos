import Image from "next/image";
import Hero from "./components/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-10 ">
      <Hero />
    </main>
  );
}
