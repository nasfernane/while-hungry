import { Module } from '@nestjs/common';
import { AuthorCountService } from './authorCount.service';
import { AuthorCountController } from './authorCount.controller';

@Module({
  controllers: [AuthorCountController],
  providers: [AuthorCountService],
})
export class AuthorCountModule {}
