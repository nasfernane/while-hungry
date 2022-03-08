import { Controller, Get } from '@nestjs/common';
import { FindLastService } from './findLast.service';


@Controller('recipes')
export class FindLastController {
  constructor(private readonly service: FindLastService) {}

  /**
   * return last 3 FindLast posted
   * @returns an array of Recipe
   */
  @Get('/last')
  findLast() {
    console.log('topinambour')
    return this.service.findLast();
  }

}
