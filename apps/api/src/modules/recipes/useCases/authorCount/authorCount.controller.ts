import { Controller, Get, Param } from '@nestjs/common';
import { AuthorCountService } from './authorCount.service';

@Controller('recipes')
export class AuthorCountController {
  constructor(private readonly service: AuthorCountService) {}

  /**
   * get recipe count based on user id
   * @param id 
   * @returns number
   */
  @Get('authorcount/:id')
  getAuthorCount(@Param('id') id: number) {
    return this.service.getAuthorCount(id);
  }
}
