import { Controller, Get, Param } from '@nestjs/common';
import { FindService } from './find.service';

@Controller('recipes')
export class FindController {
  constructor(private readonly service: FindService) {}

  /**
   * finds a recipe based on id
   * @param id
   * @returns recipe
   */
  @Get(':id')
  find(@Param('id') id: string) {
    return this.service.find(+id);
  }
}
