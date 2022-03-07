import { Module } from '@nestjs/common';

// modules
import { RecipesModule } from './../modules/recipes/recipes.module'
import { PostsModule } from './../modules/posts/posts.module'
import { AuthModule } from './../modules/auth/auth.module';
import { ClapsModule } from './../modules/claps/claps.module';
import { ReviewsModule } from '../modules/reviews/reviews.module';
import { RecipesCommentsModule } from '../modules/recipes-comments/recipes-comments.module';
import { UsersModule } from '../modules/users/users.module';
import { DefinitionsModule } from '../modules/definitions/definitions.module';
import { FavoritesModule } from '../modules/favorites/favorites.module';

// app controller & service
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
    UsersModule,
    DefinitionsModule,
    FavoritesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
