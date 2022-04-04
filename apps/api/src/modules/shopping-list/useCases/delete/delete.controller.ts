import { Controller, Delete, Param } from '@nestjs/common';

// service
import { DeleteService } from './delete.service';


@Controller('shopping-list')
export class DeleteController {
  constructor(private readonly service: DeleteService) {}

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.service.delete(+id);
  }
}