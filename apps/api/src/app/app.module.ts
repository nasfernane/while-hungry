import { Module } from '@nestjs/common';
import { RecipesModule } from './../modules/recipes/recipes.module'
import { PostsModule } from './../modules/posts/posts.module'
import { AuthModule } from './../modules/auth/auth.module';
import { ClapsModule } from './../modules/claps/claps.module';
import { ReviewsModule } from '../modules/reviews/reviews.module';
import { RecipesCommentsModule } from '../modules/recipes-comments/recipes-comments.module';
import { UsersModule } from '../modules/users/users.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    RecipesModule,
    PostsModule, 
    AuthModule, 
    ClapsModule,
    ReviewsModule,
    RecipesCommentsModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
