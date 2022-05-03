import { Controller, Param, Delete } from '@nestjs/common';

// service
import { DeleteService } from './delete.service';

@Controller('recipes')
export class DeleteController {
  constructor(private readonly service: DeleteService) {}

  /**
   * delete a recipe based on id
   * @param id
   * @returns removed recipe
   */
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(+id);
  }
}
