import { ProductsService } from './products.service';
import { Product } from '@prisma/client';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    findAll(): Promise<Product[]>;
}
