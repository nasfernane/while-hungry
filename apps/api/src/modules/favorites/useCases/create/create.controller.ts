import { Controller, Post, Body } from '@nestjs/common';

// service
import { CreateService } from './create.service';

// prisma schema
import { RecipeFavorite } from '@prisma/client';

@Controller('favorites')
export class CreateController {
  constructor(private readonly service: CreateService) {}

  @Post()
  create(@Body() favorite: RecipeFavorite) {
    return this.service.create(favorite);
  }
}
