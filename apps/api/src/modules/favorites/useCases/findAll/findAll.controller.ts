import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

// service
import { FindAllService } from './findAll.service';

@ApiTags('Favorites')
@Controller('favorites')
export class FindAllController {
  constructor(private readonly service: FindAllService) {}

  /**
   * find all favorite recipes bases on user id
   * @param id string
   * @returns an array of favorites
   */
  @Get(':id')
  findAll(@Param('id') id: string) {
    return this.service.findAll(+id);
  }
}
