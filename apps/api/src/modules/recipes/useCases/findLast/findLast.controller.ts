import { Controller, Get } from '@nestjs/common';
import { FindLastService } from './findLast.service';
import { Recipe } from '@prisma/client';


@Controller('recipes')
export class FindLastController {
  constructor(private readonly service: FindLastService) {}
  /**
   * return the 3 last recipes created
   * @returns an array of Recipe
   */
  @Get('/last')
  findLast(): Promise<Recipe[]> {
    return this.service.findLast();
  }
}
