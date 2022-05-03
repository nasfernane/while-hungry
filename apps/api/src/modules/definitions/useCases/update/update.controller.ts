import { Controller, Body, Patch, Param } from '@nestjs/common';

// service
import { UpdateService } from './update.service';

// prisma schema
import { Definition } from '@prisma/client';

@Controller('Update')
export class UpdateController {
  constructor(private readonly service: UpdateService) {}

  /**
   * update a definition based on id
   * @param id
   * @param definition
   * @returns updated definition
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() definition: Definition) {
    return this.service.update(+id, definition);
  }
}
