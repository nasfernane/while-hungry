import { Controller, Post, Body } from '@nestjs/common';
import { CreateService } from './create.service';

import { Post as PostModel } from '@prisma/client';

@Controller('posts')
export class CreateController {
  constructor(private readonly service: CreateService) {}

  @Post()
  create(@Body() post: PostModel) {
    return this.service.create(post);
  }
}
