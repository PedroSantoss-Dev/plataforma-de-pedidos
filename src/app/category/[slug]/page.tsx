import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/product-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";

const CategoryProducts = async ({ params }: any) => {
  const category = await prismaClient.category.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      products: true,
    },
  });

  if (!category) {
    return null;
  }

  return (
    <div className="mx-auto flex flex-col items-center gap-8 p-5 lg:container lg:gap-10 lg:py-10">
      <Badge variant="outline" className=" maxw-80 max-h-14 text-3xl text-center">
        {category.name}
      </Badge>

      <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
        {category.products.map((product) => (
          <ProductItem
            key={product.id}
            product={{
              ...product,
              totalPrice: computeProductTotalPrice(product).totalPrice,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;