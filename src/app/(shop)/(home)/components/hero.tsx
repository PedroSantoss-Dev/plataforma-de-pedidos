import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
    return (
        <section className="w-full hero  md:mt-4">
      <div className=" mx-8 py-8 md:py-12">
        <h1 className="text-4xl font-semibold">
         Tudo <br />
          fica melhor<br />
          com&nbsp;
          <span className="text-red-800">
            Pizza
          </span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
        Pizza é a peça que faltava para completar cada dia, uma alegria de vida simples mas deliciosa.
        </p>
        <div className="flex gap-4 text-sm">
          <button className="justify-center bg-red-800 uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full">
            Cardápio
            
          </button>
          <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
            Oferta do dia
            
          </button>
        </div>
      </div>
      <div className="relative hidden md:flex md:justify-center md:items-center pb-12">
        <Image 
        src={'/images/pizza.png'} 
        width={0}
        height={0}
        className=" h-[20rem] w-[20rem]  "
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
         alt={'pizza'} 
         priority={true}
         />
      </div>
    </section>
    );
}

export default Hero;