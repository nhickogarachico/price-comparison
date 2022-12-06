import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const BRANDS = ['Pepsi', 'Read My Lips', 'Sodastream'];
async function main() {
  BRANDS.map(async (brand) => {
    await prisma.brand.create({
      data: {
        name: brand,
      },
    });
  });
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
