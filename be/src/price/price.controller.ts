import { Body, Controller, Post } from '@nestjs/common';
import { AddPriceDto } from './dto/add-price.dto';
import { PriceService } from './price.service';

@Controller('price')
export class PriceController {
  constructor(private priceService: PriceService) {}

  @Post()
  create(@Body() addPriceDto: AddPriceDto) {
    return this.priceService.addPrice(addPriceDto);
  }
}
