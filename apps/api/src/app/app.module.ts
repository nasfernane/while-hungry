import { Module } from '@nestjs/common';
import { RecipesModule } from './../recipes/recipes.module'
import { PostsModule } from './../modules/posts/posts.module'

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [RecipesModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
