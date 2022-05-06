import { Component, OnInit, Input } from '@angular/core';

// services
import { AppService } from '@wh/core-utils';
import { FavoritesService, ShoppingListService } from '@wh/core-data';
import { UiService } from '@wh/ui';

// prisma schemas
import { RecipeInstruction } from '@prisma/client';
import { RecipeNote } from '@prisma/client';

@Component({
  selector: 'wh-recipe-instructions',
  templateUrl: './recipe-instructions.component.html',
  styleUrls: ['./recipe-instructions.component.scss'],
})
export class RecipeInstructionsComponent implements OnInit {
  @Input() recipe: any;
  @Input() preview = false;
  instructions: RecipeInstruction[];
  notes: RecipeNote[];
  recipeInFavorites: boolean;

  ingredients: any[];
  recipeUnit: string;
  scale = 1;

  constructor(
    public appService: AppService,
    private favoritesService: FavoritesService,
    private uiService: UiService,
    private shoppingListService: ShoppingListService
  ) {}

  ngOnInit(): void {
    this.instructions = this.recipe.recipeInstructions;
    this.notes = this.recipe.recipeNotes;
    this.ingredients = this.recipe.requiredIngredients;
    this.recipeUnit = this.recipe.unit;

    if (!this.preview) {
      this.checkFavorite();
    }
  }

  async addOrRemoveFavorite() {
    if (this.appService.userLogged) {
      this.favoritesService
        .addOrRemoveFavorite(
          +this.recipe.id,
          this.appService.getUserId(),
          !this.recipeInFavorites
        )
        .subscribe((res) => {
          if (res) {
            this.recipeInFavorites = !this.recipeInFavorites;

            if (this.recipeInFavorites) {
              this.uiService.openAlert('Recipe added to your favorites');
            } else {
              this.uiService.openAlert('Recipe removed from your favorites');
            }
          }
        });
    } else {
      this.uiService.openLoginAlert();
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
    this.uiService.openAlert('Available soon');
  }


  unitEvent(event: string) {
    if (this.recipeUnit !== event) {
      this.recipeUnit = event;
    }
  }

  scaleEvent(event: number) {
    if (this.scale !== event) {
      this.scale = event;
    }
  }

  getQuantity(ingredient: any) {
    return this.appService.round2decimals(
      ingredient.quantity *
        this.scale *
        (this.recipe.unit !== this.recipeUnit
          ? +this.appService.convertUnitAmount(ingredient.unit)
          : 1)
    );
  }

  getUnit(ingredient: any) {
    return this.recipe.unit === this.recipeUnit
      ? ingredient.unit
      : this.appService.convertUnitLabel(this.recipeUnit, ingredient.unit);
  }

  addShoppingList() {
    if (this.appService.userLogged) {
      const wishlist = [];

      for (const ingredient of this.ingredients) {
        wishlist.push({
          name: ingredient.name,
          quantity: this.getQuantity(ingredient),
          unit: this.getUnit(ingredient),
        });
      }

      if (wishlist.length > 0) {
        this.shoppingListService
          .create(this.appService.getUserId(), this.recipe.id, wishlist)
          .subscribe((res) => {
            this.uiService.openAlert('Recipe added to your shopping list');
          });
      }
    } else {
      this.uiService.openLoginAlert();
    }
  }
}
