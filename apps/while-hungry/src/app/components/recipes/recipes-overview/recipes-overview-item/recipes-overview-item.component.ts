import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { RecipeService } from '@wh/core-data';
// import { RecipeService } from 'src/app/services/recipe.service';
// import { AppService } from 'src/app/services/app.service';
import moment from 'moment';

import { Recipe } from '@prisma/client';
import { RecipeReview } from '@prisma/client';
import { RecipeFavorite } from '@prisma/client';

@Component({
  selector: 'wh-recipes-overview-item',
  templateUrl: './recipes-overview-item.component.html',
  styleUrls: ['./recipes-overview-item.component.scss']
})
export class RecipesOverviewItemComponent {
  @Input() recipe: any;
  @Output() favoriteEvent = new EventEmitter<boolean>();

  constructor(
    private recipeService: RecipeService,
    // private appService: AppService,
  ) { }

  getAvgReview(reviews: RecipeReview[]) {
    return reviews.reduce((a, { review }) => a + review, 0) / reviews.length;
  }

  async addOrRemoveFavorite(recipeFavorites: RecipeFavorite[]) {
    // if (this.appService.userLogged) {
      let recipeInFavorites = false;
      // const userId = this.appService.getUserId();
      const userId = 3;
      let recipeId;

      if (userId && recipeFavorites.length > 0) {
        recipeId = recipeFavorites[0].recipeId;

        for (const element of recipeFavorites) {
          if (element.userId === userId) {
            recipeInFavorites = true;
            break;
          }
        }

        this.recipeService.addOrRemoveFavorite(recipeId, userId, !recipeInFavorites).subscribe(res => {
          if (res) this.favoriteEvent.emit(true);
        });
      }
    // }
  }

  formatDate(date: string) {
    return moment(date).format('MMMM Do YYYY');
  }
}
