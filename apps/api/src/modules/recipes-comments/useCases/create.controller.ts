import { Controller, Post, Body } from '@nestjs/common';

// service
import { CreateService } from './create.service';

// schema
import { RecipeComment } from '@prisma/client';

@Controller('recipes-comments')
export class CreateController {
  constructor(private readonly service: CreateService) {}

  /**
   * create a new comment 
   * @param comment 
   * @returns new comment
   */
  @Post()
  create(@Body() comment: RecipeComment) {
    return this.service.create(comment);
  }
}
