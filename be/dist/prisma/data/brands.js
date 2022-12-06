"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
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
//# sourceMappingURL=brands.js.map