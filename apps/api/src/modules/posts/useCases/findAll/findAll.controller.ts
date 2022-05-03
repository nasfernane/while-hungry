import { Controller, Get } from '@nestjs/common';
import { FindAllService } from './findAll.service';

@Controller('posts')
export class FindAllController {
  constructor(private readonly service: FindAllService) {}

  /**
   * get all posts
   * @returns an array of Post
   */
  @Get()
  findAll() {
    return this.service.findAll();
  }
}
