import { Component, Input, OnInit } from '@angular/core';

// services
import { ShoppingListService } from '@wh/core-data';
import { AppService } from '@wh/core-utils';
import { UiService } from '@wh/ui';

@Component({
  selector: 'wh-recipe-ingredients',
  templateUrl: './recipe-ingredients.component.html',
  styleUrls: ['./recipe-ingredients.component.scss']
})
export class RecipeIngredientsComponent implements OnInit {
  @Input() recipe: any;
  @Input() preview = false;
  ingredients: any[];
  recipeUnit: string;
  scale = 1;

  constructor(
    public appService: AppService,
    private uiService: UiService,
    private shoppingListService: ShoppingListService,
  ) {}

  ngOnInit() {
    this.ingredients = this.recipe.requiredIngredients;
    this.recipeUnit = this.recipe.unit;
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
    return this.appService.round2decimals(ingredient.quantity * this.scale * 
      (
        this.recipe.unit !== this.recipeUnit 
        ? +(this.appService.convertUnitAmount(ingredient.unit))
        : 1
      )
    )
  }

  getUnit(ingredient: any) {
    return this.recipe.unit === this.recipeUnit 
          ? ingredient.unit
          : this.appService.convertUnitLabel(this.recipeUnit, ingredient.unit)
  }

  addShoppingList() {
    const wishlist = [];

    for (const ingredient of this.ingredients) {
      wishlist.push(
        {
          name: ingredient.name,
          quantity: this.getQuantity(ingredient),
          unit: this.getUnit(ingredient)
        }
      )
    }

    if (wishlist.length > 0) {
      this.shoppingListService.create(this.appService.getUserId(), this.recipe.id, wishlist).subscribe((res) => {
        this.uiService.openAlert('Recipe added to your shopping list')
      })
    }
  }
}
