import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

// services
import { ShoppingListService } from '@wh/core-data';
import { AppService } from '@wh/core-utils';
import { UiService } from '@wh/ui';


@Component({
  selector: 'wh-new-recipe-preview-ingredients',
  templateUrl: './new-recipe-preview-ingredients.component.html',
  styleUrls: ['./new-recipe-preview-ingredients.component.scss']
})
export class NewRecipePreviewIngredientsComponent implements OnInit {
  @Output() updateIngredientsEvent = new EventEmitter<any[]>()
  @Output() editIngredientsEvent = new EventEmitter<number>()
  @Input() recipe: any;
  @Input() preview = false;
  @Input() editingIngredientIndex: number | null = null;
  ingredients: any[];
  recipeUnit: string;
  scale = 1;

  constructor(
    public appService: AppService,
    private uiService: UiService,
    private shoppingListService: ShoppingListService
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

  editIngredient(index: number) {
    this.editingIngredientIndex = index;
    this.editIngredientsEvent.emit(index);
  }

  removeIngredient(index: number) {
    this.ingredients.splice(index, 1)
    this.updateIngredients();
  }

  updateIngredients() {
    this.updateIngredientsEvent.emit(this.ingredients);
  }

}
