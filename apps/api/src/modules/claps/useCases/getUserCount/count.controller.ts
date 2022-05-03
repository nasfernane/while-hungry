import { Controller, Get, Param } from '@nestjs/common';
import { CountService } from './count.service';

@Controller('claps')
export class CountController {
  constructor(private readonly service: CountService) {}

  /**
   * get claps count of user
   * @param id
   * @returns number
   */
  @Get('/count/:id')
  async count(@Param('id') id: number) {
    return this.service.count(id);
  }
}
