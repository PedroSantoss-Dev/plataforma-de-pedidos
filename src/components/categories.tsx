
import CategoryItem from "./category-item";
import { prismaClient } from "@/lib/prisma";

const Categories = async() => {
    const categories = await prismaClient.category.findMany({});
    return ( 
        <section className="flex justify-center gap-3 px-3">
            {categories.map((category: any) => (
                <CategoryItem key={category.id} category={category}/>
            ))}
        </section>
     );
}
 
export default Categories;