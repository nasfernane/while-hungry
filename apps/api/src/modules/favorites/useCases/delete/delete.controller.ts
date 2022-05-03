import { Controller, Param, Delete } from '@nestjs/common';
import { DeleteService } from './delete.service';

@Controller('favorites')
export class DeleteController {
  constructor(private readonly service: DeleteService) {}

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(+id);
  }
}
