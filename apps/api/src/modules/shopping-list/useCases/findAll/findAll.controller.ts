import { Controller, Get, Param } from '@nestjs/common';

// service
import { FindAllService } from './findAll.service';

@Controller('shopping-list')
export class FindAllController {
  constructor(private readonly service: FindAllService) {}

  @Get(':id')
  create(@Param('id') id: number) {
    return this.service.findAll(id);
  }
}
