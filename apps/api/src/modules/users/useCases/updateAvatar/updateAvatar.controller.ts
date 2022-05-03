import { Controller, Post, Body, Param } from '@nestjs/common';
import { UpdateAvatarService } from './updateAvatar.service';

@Controller('users')
export class UpdateAvatarController {
  constructor(private readonly service: UpdateAvatarService) {}

  @Post(':id/avatar')
  updateAvatar(@Param('id') id: string, @Body() avatar: object) {
    return this.service.updateAvatar(+id, avatar);
  }
}
