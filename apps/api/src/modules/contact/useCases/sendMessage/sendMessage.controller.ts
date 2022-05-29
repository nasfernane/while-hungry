import { Controller, Post, Body } from '@nestjs/common';
import { SendMessageService } from './sendMessage.service';
import { ContactBody } from '../../interfaces/contactBody';


@Controller('contact')
export class SendMessageController {
  constructor(private readonly service: SendMessageService) {}

  @Post()
  async getAuthorCount(@Body() body: ContactBody) {
    return this.service.sendMessage(body);
  }
}
