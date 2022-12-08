import { CreateStoreDto } from './dto/create-store.dto';
import { StoresService } from './stores.service';
export declare class StoresController {
    private storesService;
    constructor(storesService: StoresService);
    create(createStoreDto: CreateStoreDto): Promise<{
        success: boolean;
        store: import(".prisma/client").Store;
    }>;
}
