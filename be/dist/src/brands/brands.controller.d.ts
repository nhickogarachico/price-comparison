import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
export declare class BrandsController {
    private brandsService;
    constructor(brandsService: BrandsService);
    create(createBrandDto: CreateBrandDto): Promise<{
        success: boolean;
        brand: import(".prisma/client").Brand;
    }>;
}
