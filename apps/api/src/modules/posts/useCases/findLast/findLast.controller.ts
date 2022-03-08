import { Controller, Get } from '@nestjs/common';

// service
import { FindLastService } from './findLast.service';

@Controller('posts')
export class FindLastController {
  constructor(private readonly service: FindLastService) {}

  /**
   * find last post created
   * @returns post
   */
  @Get('/last')
  findLast() {
    return this.service.findLast();
  }

}
