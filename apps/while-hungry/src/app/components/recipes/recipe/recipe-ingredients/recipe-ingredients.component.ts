import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '@wh/core-utils';


@Component({
  selector: 'wh-recipe-ingredients',
  templateUrl: './recipe-ingredients.component.html',
  styleUrls: ['./recipe-ingredients.component.scss']
})
export class RecipeIngredientsComponent implements OnInit {
  @Input() recipe: any;
  ingredients: any[];
  recipeUnit: string;
  scale = 1;

  constructor(
    public appService: AppService,
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
}
