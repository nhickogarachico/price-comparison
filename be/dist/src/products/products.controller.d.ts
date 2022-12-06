import { ProductsService } from './products.service';
import { Product } from '@prisma/client';
import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): Promise<{
        success: boolean;
        product: Product;
    }>;
    findAll(): Promise<Product[]>;
}
