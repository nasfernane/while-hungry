import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FavoritesService, RecipeService } from '@wh/core-data';

// prisma schema
import { RecipeFavorite } from '@prisma/client';

// services
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
  favoriteId: number;
  recipeInFavorites = false;

  constructor(
    private recipeService: RecipeService,
    private favoritesService: FavoritesService,
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
            this.favoriteId = element.id;
            break;
          }
        }
      }
    }
  }

  async addOrRemoveFavorite() {
    if (this.appService.userLogged) {
      this.favoritesService.addOrRemoveFavorite(this.recipeId, this.userId, this.recipeInFavorites, this.favoriteId ? this.favoriteId : undefined).subscribe((res: any) => {
        if (res) {
          this.favoriteEvent.emit(true);
          if (!this.recipeInFavorites) {
            this.uiService.openAlert('Recipe added to your favorites')
          } else {
            this.uiService.openAlert('Recipe removed from your favorites')
            if (this.removeIcon) this.favoriteEvent.emit(true);
          }

          this.recipeInFavorites = !this.recipeInFavorites;
        }
      });
    } else {
      this.uiService.openLoginAlert()
    }
  }
}
