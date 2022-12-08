import { PrismaService } from 'src/prisma/prisma.service';
import { AddPriceDto } from './dto/add-price.dto';
export declare class PriceService {
    private prisma;
    constructor(prisma: PrismaService);
    addPrice(product: AddPriceDto): Promise<{
        success: boolean;
        price: import(".prisma/client").Price & {
            productStore: import(".prisma/client").ProductStore & {
                product: import(".prisma/client").Product;
                store: import(".prisma/client").Store;
            };
        };
    }>;
}
