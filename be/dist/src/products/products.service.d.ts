import { PrismaService } from 'src/prisma/prisma.service';
import { Product } from '@prisma/client';
import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<Product[]>;
    create(product: CreateProductDto): Promise<{
        success: boolean;
        product: Product;
    }>;
}
