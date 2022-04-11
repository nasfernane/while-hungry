import { Controller, Get } from '@nestjs/common';
import { FindAllService } from './findAll.service';
import { SkipThrottle } from '@nestjs/throttler';

@SkipThrottle()
@Controller('recipes')
export class FindAllController {
  constructor(private readonly service: FindAllService) {}

  /**
   * find all recipes
   * @returns an array of Recipe
   */
  @Get()
  findAll() {
    return this.service.findAll();
  }
}
