import { Controller, Get } from '@nestjs/common';
import { FindAllService } from './findAll.service';

// prisma shema
import { RecipeTagCategory } from '@prisma/client';

@Controller('tags')
export class FindAllController {
  constructor(private readonly service: FindAllService) {}

  /**
   * find all recipe tags options
   * @returns an array of tags categories including different labels
   */
  @Get()
  findAll(): Promise<RecipeTagCategory[]> {
    return this.service.findAll();
  }
}
