import { Module } from '@nestjs/common';
import { SendMessageService } from './sendMessage.service';
import { SendMessageController } from './sendMessage.controller';

@Module({
  controllers: [SendMessageController],
  providers: [SendMessageService],
})
export class SendMessageModule {}
