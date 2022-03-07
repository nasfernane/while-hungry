import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { RecipeService } from '@wh/core-data';

import moment from 'moment';

import { Recipe } from '@prisma/client';
import { RecipeReview } from '@prisma/client';
import { RecipeFavorite } from '@prisma/client';
import { AppService } from '@wh/core-utils';
import { UiService } from '@wh/ui';

@Component({
  selector: 'wh-recipes-overview-item',
  templateUrl: './recipes-overview-item.component.html',
  styleUrls: ['./recipes-overview-item.component.scss']
})
export class RecipesOverviewItemComponent implements OnInit {
  @Input() recipe: any;
  @Input() removeIcon = false;
  @Output() favoriteEvent = new EventEmitter<boolean>();

  recipeId: number;
  userId: number;
  recipeInFavorites = false;

  constructor(
    private recipeService: RecipeService,
    private uiService: UiService,
    public appService: AppService,
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

  async addOrRemoveFavorite() {
    if (this.appService.userLogged) {
      this.recipeService.addOrRemoveFavorite(this.recipeId, this.userId, !this.recipeInFavorites).subscribe(res => {
        if (res) this.favoriteEvent.emit(true);

        if (this.recipeInFavorites) {
          this.uiService.openAlert('Recipe added to your favorites')
        } else {
          this.uiService.openAlert('Recipe removed from your favorites')
          if (this.removeIcon) this.favoriteEvent.emit(true);
        }
      });

      this.recipeInFavorites = !this.recipeInFavorites;
    } else {
      this.uiService.openLoginAlert()
    }
  }
}
