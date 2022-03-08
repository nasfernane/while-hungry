import { Controller, Get } from '@nestjs/common';
import { FindAllService } from './findAll.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Definitions')
@Controller('definitions')
export class FindAllController {
  constructor(private readonly service: FindAllService) {}

  /**
   * gets all definitions ordered by labels alphabetical order
   * @returns an array of definitions
   */
  @Get()
  findAll() {
    return this.service.findAll();
  }
 
}
