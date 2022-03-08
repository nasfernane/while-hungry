// nest libs & utils
import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

//service
import { CheckService } from './check.service';

// schema
import { Clap } from '@prisma/client';

@ApiTags('Claps')
@Controller('claps')
export class CheckController {
  constructor(private readonly service: CheckService) {}
  /**
   * check if user already clapped the author
   * @param clap 
   * @returns a boolean
   */
  @Post('/check')
  check(@Body() clap: Clap) {
    return this.service.check(clap);
  }
 
}