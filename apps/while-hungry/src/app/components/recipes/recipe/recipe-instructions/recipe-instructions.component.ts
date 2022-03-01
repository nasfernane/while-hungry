import { Component, OnInit, Input } from '@angular/core';

// services
import { AppService } from '@wh/core-utils';
import { RecipeService } from '@wh/core-data';
import { UiService } from '@wh/ui';

// prisma schemas
import { RecipeInstruction } from '@prisma/client';
import { RecipeNote } from '@prisma/client';

@Component({
  selector: 'wh-recipe-instructions',
  templateUrl: './recipe-instructions.component.html',
  styleUrls: ['./recipe-instructions.component.scss']
})
export class RecipeInstructionsComponent implements OnInit {
  @Input() recipe: any;
  instructions: RecipeInstruction[];
  notes: RecipeNote[];
  recipeInFavorites: boolean;

  constructor(
    private appService: AppService,
    private recipeService: RecipeService,
    private uiService: UiService,
  ) {}

  ngOnInit(): void {
    this.instructions = this.recipe.recipeInstructions;
    this.notes = this.recipe.recipeNotes;
    this.checkFavorite();
  }

  async addOrRemoveFavorite() {
    if (this.appService.userLogged) {
      this.recipeService.addOrRemoveFavorite(+this.recipe.id, this.appService.getUserId(), !this.recipeInFavorites).subscribe(res => {
        if (res) {
          this.recipeInFavorites = !this.recipeInFavorites;

          if (this.recipeInFavorites) {
            this.uiService.openAlert('Recipe added to your favorites')
          } else {
            this.uiService.openAlert('Recipe removed from your favorites')
          }
        }
      });
    } else {
      this.uiService.openLoginAlert('You must log in to continue')
    }
  }

  checkFavorite() {
    if (this.appService.userLogged) {
      const userId = this.appService.getUserId();

      if (this.recipe.recipeFavorites.length > 0) {
        for (const element of this.recipe.recipeFavorites) {
          if (element.userId === userId) {
            this.recipeInFavorites = true;
            break;
          }
        }
      }
    }
  }

  printRecipe() {
    this.uiService.openAlert('Feature available soon');
  }

}