import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { PrismaModule } from './prisma/prisma.module';
import { BrandsModule } from './brands/brands.module';
import { StoresModule } from './stores/stores.module';
import { PriceModule } from './price/price.module';

@Module({
  imports: [ProductsModule, PrismaModule, BrandsModule, StoresModule, PriceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
