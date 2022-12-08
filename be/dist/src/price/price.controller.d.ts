import { AddPriceDto } from './dto/add-price.dto';
import { PriceService } from './price.service';
export declare class PriceController {
    private priceService;
    constructor(priceService: PriceService);
    create(addPriceDto: AddPriceDto): Promise<{
        success: boolean;
        price: import(".prisma/client").Price & {
            productStore: import(".prisma/client").ProductStore & {
                product: import(".prisma/client").Product;
                store: import(".prisma/client").Store;
            };
        };
    }>;
}
