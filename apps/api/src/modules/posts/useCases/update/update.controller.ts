import { Controller, Body, Patch, Param } from '@nestjs/common';
import { UpdateService } from './update.service';

import { Post as postModel } from '@prisma/client';

@Controller('posts')
export class UpdateController {
  constructor(private readonly service: UpdateService) {}
  /**
   * update a post based on id
   * @param id
   * @param post
   * @returns updated post
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() post: postModel) {
    return this.service.update(+id, post);
  }
}
