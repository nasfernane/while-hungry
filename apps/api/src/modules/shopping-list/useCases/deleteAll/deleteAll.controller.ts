import { Controller, Delete, Param } from '@nestjs/common';

// service
import { DeleteAllService } from './deleteAll.service';

@Controller('shopping-list')
export class DeleteAllController {
  constructor(private readonly service: DeleteAllService) {}

  @Delete('all/:id')
  deleteAll(@Param('id') id: number) {
    return this.service.deleteAll(id);
  }
}
