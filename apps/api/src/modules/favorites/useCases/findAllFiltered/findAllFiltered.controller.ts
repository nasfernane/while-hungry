import { Controller, Post, Body, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

// service
import { FindAllFilteredService } from './findAllFiltered.service';

@ApiTags('Favorites')
@Controller('favorites')
export class FindAllFilteredController {
  constructor(private readonly service: FindAllFilteredService) {}

  /**
   * find all favorite recipes bases on user id, with filters
   * @param id (user)
   * @param filters 
   * @returns an array of RecipeFavorite
   */
  @Post(':id')
  findAllWithFilters(@Param('id') id: string, @Body() filters: object) {
    return this.service.findAllFiltered(+id, filters);
  }

}
