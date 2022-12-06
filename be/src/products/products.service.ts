import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Product } from '@prisma/client';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Product[]> {
    const products = await this.prisma.product.findMany({
      include: {
        brand: true,
      },
    });

    return products;
  }

  async create(product: CreateProductDto) {
    const newProduct = await this.prisma.product.create({
      data: product,
    });

    return {
      success: true,
      product: newProduct,
    };
  }
}
