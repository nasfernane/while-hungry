import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '@prisma/client';

@Component({
  selector: 'wh-recipe-ingredients',
  templateUrl: './recipe-ingredients.component.html',
  styleUrls: ['./recipe-ingredients.component.scss']
})
export class RecipeIngredientsComponent implements OnInit {
  @Input() ingredients: Ingredient[];

  ngOnInit() {
    console.log(this.ingredients);
  }
}
