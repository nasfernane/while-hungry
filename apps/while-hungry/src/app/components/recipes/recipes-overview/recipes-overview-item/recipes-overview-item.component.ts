import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { RecipeService } from '@wh/core-data';
// import { RecipeService } from 'src/app/services/recipe.service';
// import { AppService } from 'src/app/services/app.service';
import moment from 'moment';

import { Recipe } from '@prisma/client';
import { RecipeReview } from '@prisma/client';
import { RecipeFavorite } from '@prisma/client';
import { AppService } from '@wh/core-data';

@Component({
  selector: 'wh-recipes-overview-item',
  templateUrl: './recipes-overview-item.component.html',
  styleUrls: ['./recipes-overview-item.component.scss']
})
export class RecipesOverviewItemComponent implements OnInit {
  @Input() recipe: any;
  @Output() favoriteEvent = new EventEmitter<boolean>();

  recipeId: number;
  userId: number;
  recipeInFavorites = false;

  constructor(
    private recipeService: RecipeService,
    private appService: AppService,
  ) { }

  ngOnInit() {
    this.recipeId = this.recipe.id;

    if (this.appService.userLogged) {
      this.userId = this.appService.getUserId();

      if (this.recipe.recipeFavorites.length > 0) {
        for (const element of this.recipe.recipeFavorites) {
          if (element.userId === this.userId) {
            this.recipeInFavorites = true;
            break;
          }
        }
      }
    }
  }

  getAvgReview(reviews: RecipeReview[]) {
    return reviews.reduce((a, { review }) => a + review, 0) / reviews.length;
  }

  

  async addOrRemoveFavorite() {
    if (this.appService.userLogged) {
      this.recipeService.addOrRemoveFavorite(this.recipeId, this.userId, !this.recipeInFavorites).subscribe(res => {
        if (res) this.favoriteEvent.emit(true);
      });

      this.recipeInFavorites = !this.recipeInFavorites;
    }
  }

  formatDate(date: string) {
    return moment(date).format('MMMM Do YYYY');
  }
}
