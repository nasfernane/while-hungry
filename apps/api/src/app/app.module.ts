import { Module } from '@nestjs/common';
import { RecipesModule } from './../recipes/recipes.module'
import { PostsModule } from './../posts/posts.module'
import { AuthModule } from '../modules/auth/auth.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [RecipesModule, PostsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
