import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStoreDto } from './dto/create-store.dto';

@Injectable()
export class StoresService {
  constructor(private prisma: PrismaService) {}

  async create(@Body() store: CreateStoreDto) {
    const newStore = await this.prisma.store.create({
      data: store,
    });

    return {
      success: true,
      store: newStore,
    };
  }
}
