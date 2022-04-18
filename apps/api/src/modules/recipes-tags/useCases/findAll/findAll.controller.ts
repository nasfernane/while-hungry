import { Controller, Get } from '@nestjs/common';
import { FindAllService } from './findAll.service';
import { SkipThrottle } from '@nestjs/throttler';
import { RecipeTagList } from '@prisma/client';

@SkipThrottle()
@Controller('tags')
export class FindAllController {
  constructor(private readonly service: FindAllService) {}

  /**
   * find all recipe tags options
   * @returns an array of tags
   */
  @Get()
  findAll(): Promise<RecipeTagList[]> {
    return this.service.findAll();
  }
}
