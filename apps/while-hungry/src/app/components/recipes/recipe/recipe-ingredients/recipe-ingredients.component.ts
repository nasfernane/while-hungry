import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'wh-recipe-ingredients',
  templateUrl: './recipe-ingredients.component.html',
  styleUrls: ['./recipe-ingredients.component.scss']
})
export class RecipeIngredientsComponent implements OnInit {
  @Input() recipe: any;
  ingredients: any[];

  ngOnInit() {
    this.ingredients = this.recipe.requiredIngredients;
    console.log(this.ingredients);
  }
}
