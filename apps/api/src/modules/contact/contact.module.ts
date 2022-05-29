import { Module } from '@nestjs/common';
// use cases modules

import { SendMessageModule } from './useCases/sendMessage/sendMessage.module';

@Module({
  imports: [
    SendMessageModule
  ],
})
export class ContactModule {}
