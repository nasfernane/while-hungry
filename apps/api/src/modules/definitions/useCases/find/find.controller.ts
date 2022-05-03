import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

// service
import { FindService } from './find.service';

@ApiTags('Definitions')
@Controller('definitions')
export class FindController {
  constructor(private readonly service: FindService) {}

  /**
   * find a definition based on id
   * @param id
   * @returns definition
   */
  @Get(':id')
  async find(@Param('id') id: string) {
    return this.service.find(+id);
  }
}
