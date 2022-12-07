import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBrandDto } from './dto/create-brand.dto';
export declare class BrandsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(brand: CreateBrandDto): Promise<{
        success: boolean;
        brand: import(".prisma/client").Brand;
    }>;
}
