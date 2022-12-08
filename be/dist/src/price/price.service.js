"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PriceService = class PriceService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async addPrice(product) {
        let productStore = null;
        productStore = await this.prisma.productStore.findFirst({
            where: {
                productId: product.productId,
                storeId: product.storeId,
            },
        });
        if (!productStore) {
            productStore = await this.prisma.productStore.create({
                data: {
                    productId: product.productId,
                    storeId: product.storeId,
                },
            });
        }
        const productPrice = await this.prisma.price.create({
            data: {
                productStoreId: productStore.id,
                price: product.price,
            },
            include: {
                productStore: {
                    include: {
                        product: true,
                        store: true,
                    },
                },
            },
        });
        return {
            success: true,
            price: productPrice,
        };
    }
};
PriceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PriceService);
exports.PriceService = PriceService;
//# sourceMappingURL=price.service.js.map