import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStoreDto } from './dto/create-store.dto';
export declare class StoresService {
    private prisma;
    constructor(prisma: PrismaService);
    create(store: CreateStoreDto): Promise<{
        success: boolean;
        store: import(".prisma/client").Store;
    }>;
}
