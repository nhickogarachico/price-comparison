import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBrandDto } from './dto/create-brand.dto';

@Injectable()
export class BrandsService {
  constructor(private prisma: PrismaService) {}

  async create(brand: CreateBrandDto) {
    const newBrand = await this.prisma.brand.create({
      data: brand,
    });

    return {
      success: true,
      brand: newBrand,
    };
  }
}
