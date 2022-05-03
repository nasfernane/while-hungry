import { Controller, Post, Body } from '@nestjs/common';
import { FindAllFilteredService } from './findAllFiltered.service';

@Controller('recipes')
export class FindAllFilteredController {
  constructor(private readonly service: FindAllFilteredService) {}

  /**
   * return all recipes based on filters
   * @param filters
   * @returns an array of Recipe
   */
  @Post('/filters')
  findAllWithFilters(@Body() filters: object) {
    return this.service.findAllFiltered(filters);
  }
}
