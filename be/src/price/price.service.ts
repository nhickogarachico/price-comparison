import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddPriceDto } from './dto/add-price.dto';

@Injectable()
export class PriceService {
  constructor(private prisma: PrismaService) {}

  async addPrice(product: AddPriceDto) {
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
}
