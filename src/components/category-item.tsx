import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
}
const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link href={`/category/${category.slug}`} className="flex flex-col gap-2 cursor-pointer">
      <div className="w-[9rem] max-h-[4rem] bg-gray-300 flex justify-center gap-2 items-center rounded-full p-2 transition transform-cpu hover:scale-105">
        <Image
          src={category.imageUrl}
          alt={category.name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[49%] w-auto max-w-[55%] rounded-full"
          style={{
            objectFit: "contain",
          }}
        />
        <h3 className="text-center">{category.name}</h3>
      </div>
      
    </Link>
  );
}

export default CategoryItem;