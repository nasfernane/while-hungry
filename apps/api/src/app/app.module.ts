import { Module, NestModule, MiddlewareConsumer, RequestMethod  } from '@nestjs/common';

// check auth token middleware
import { CheckAuthMiddleware } from '../middlewares/checkAuth';

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
import { ShoppingListModule } from '../modules/shopping-list/shopping-list.module';
import { FilesModule } from '../modules/files/files.module';
import { RecipesTagsModule } from '../modules/recipes-tags/recipes-tags.module';

// app controller & service
import { AppController } from './app.controller';
import { AppService } from './app.service';

// trottler (rate limiter)
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';


@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl: 10,
      limit: 5000,
    }),
    RecipesModule,
    PostsModule, 
    AuthModule, 
    ClapsModule,
    ReviewsModule,
    RecipesCommentsModule,
    UsersModule,
    DefinitionsModule,
    FavoritesModule,
    ShoppingListModule,
    FilesModule,
    RecipesTagsModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_GUARD, useClass: ThrottlerGuard }
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CheckAuthMiddleware)
      .forRoutes(
        'users',
        'favorites',
        'shopping-list',
        { path: 'recipes', method: RequestMethod.POST },
        { path: 'recipes/:id', method: RequestMethod.DELETE },
        { path: 'recipes/:id', method: RequestMethod.PATCH },
        { path: 'recipes-comments', method: RequestMethod.POST },
        { path: 'recipes/picture', method: RequestMethod.POST },
        { path: 'reviews', method: RequestMethod.POST },
        { path: 'reviews:id', method: RequestMethod.PATCH },
        { path: 'claps', method: RequestMethod.POST },
        { path: 'claps/check', method: RequestMethod.POST },
      )
  }
}
