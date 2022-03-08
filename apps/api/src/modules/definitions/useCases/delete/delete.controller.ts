import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeleteService } from './delete.service';


@Controller('Delete')
export class DeleteController {
  constructor(private readonly service: DeleteService) {}

  /**
   * delete a definition based on id
   * @param id 
   * @returns 
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.delete(+id);
  }
}
