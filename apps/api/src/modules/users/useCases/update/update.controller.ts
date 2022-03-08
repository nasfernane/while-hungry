import { Controller, Body, Patch, Param } from '@nestjs/common';
import { UpdateService } from './update.service';

import { User } from '@prisma/client';

@Controller('users')
export class UpdateController {
  constructor(private readonly service: UpdateService) {}

  /**
   * updates user data based on id
   * @param id 
   * @param user 
   * @returns new user data
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() user: User) {
    return this.service.update(+id, user);
  }
}
