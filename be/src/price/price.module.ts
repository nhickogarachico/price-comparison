import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PriceController } from './price.controller';
import { PriceService } from './price.service';

@Module({
  imports: [PrismaModule],
  controllers: [PriceController],
  providers: [PriceService],
})
export class PriceModule {}
