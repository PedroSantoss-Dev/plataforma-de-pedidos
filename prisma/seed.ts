const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  try {
    const pizzasCategory = await prisma.category.create({
      data: {
        name: "Pizzas",
        slug: "pizzas",
        imageUrl: "https://www.svgrepo.com/show/434208/pizza.svg",
      },
    });

    const pizzas = [
      {
        name: "Pizza Calabresa",
        slug: "pizza-calabresa",
        description:
          "mussarela, calabresa, cebola, oregano, molho e tomate.",
        imageUrl: "https://images.pexels.com/photos/3682837/pexels-photo-3682837.jpeg?auto=compress&cs=tinysrgb&w=600",
        basePrice: 60,
        categoryId: pizzasCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Pizza Frango com Catupiry",
        slug: "pizza-frango-com-catupiry",
        description:
          "mussarela, frango, catupiry, cebola, oregano, molho e tomate.",
        imageUrl:  "https://images.pexels.com/photos/1166120/pexels-photo-1166120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        basePrice: 70,
        categoryId: pizzasCategory.id,
        discountPercentage: 7, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: pizzas,
    });

    const hamburgersCategory = await prisma.category.create({
      data: {
        name: "Hamburgers",
        slug: "hamburgers",
        imageUrl: "https://www.svgrepo.com/show/475195/hamburger.svg",
      },
    });

    const hamburgers = [
      {
        name: "Xburger",
        slug: "xburger",
        description:
          "Pão, carne, queijo, presunto, cebola, alface e tomate.",
        imageUrl: "https://images.pexels.com/photos/3139343/pexels-photo-3139343.jpeg?auto=compress&cs=tinysrgb&w=600",
        basePrice: 16,
        categoryId: hamburgersCategory.id,
        discountPercentage: 10, // 10% discount
      },
      
    ];

    await prisma.product.createMany({
      data: hamburgers,
    });

    const combosCategory = await prisma.category.create({
      data: {
        name: "Combo",
        slug: "combo",
        imageUrl: "https://www.svgrepo.com/show/475115/fast-food.svg",
      },
    });

    const combos = [
      {
        name: "Super combo hamburguer + bata frita + coca-cola",
        slug: "super-combo-hamburguer-bata-frita-coca-cola",
        description:
          "2 Hamburguer, 2 bata frita, coca-cola 1l.",
        imageUrl: "https://images.pexels.com/photos/551991/pexels-photo-551991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        basePrice: 42,
        categoryId: combosCategory.id,
        discountPercentage: 10, // 10% discount
      },
     
    ];

    await prisma.product.createMany({
      data: combos,
    });

    const bebidasCategory = await prisma.category.create({
      data: {
        name: "Bebidas",
        slug: "bebidas",
        imageUrl: "https://www.svgrepo.com/show/276778/soda-coke.svg",
      },
    });

    const bebidas = [
      {
        name: "Coca Cola 250ml",
        slug: "coca-cola-250ml",
        description:
          "Coca-cola.",
        imageUrl:"https://images.pexels.com/photos/17650224/pexels-photo-17650224/free-photo-of-lata-refrigerante-coca-cola-fundo-branco.jpeg?auto=compress&cs=tinysrgb&w=600",
        basePrice: 7,
        categoryId: bebidasCategory.id,
        discountPercentage: 10, // 10% discount
      }
    ];

    await prisma.product.createMany({
      data: bebidas,
    });

    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });