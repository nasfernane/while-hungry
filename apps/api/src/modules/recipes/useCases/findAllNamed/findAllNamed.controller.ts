import { Controller, Get, Param } from '@nestjs/common';
import { FindAllNamedService } from './findAllNamed.service';


@Controller('recipes')
export class FindAllNamedController {
  constructor(private readonly service: FindAllNamedService) {}

  /**
   * return all recipes based on filters
   * @param filters 
   * @returns an array of Recipe
   */
  @Get('/name/:name')
  findAllWithFilters(@Param('name') name: string) {
    return this.service.findAllNamed(name);
  }
}