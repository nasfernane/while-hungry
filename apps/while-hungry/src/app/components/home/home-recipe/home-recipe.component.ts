import { Component, OnInit } from '@angular/core';

// service
import { RecipeService } from '@wh/core-data';

@Component({
  selector: 'wh-home-recipe',
  templateUrl: './home-recipe.component.html',
  styleUrls: ['./home-recipe.component.scss'],
})
export class HomeRecipeComponent implements OnInit {
  recipes: any;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.findLastRecipes();
  }

  findLastRecipes() {
    this.recipeService.findLast().subscribe((recipes) => {
      if (recipes) {
        this.recipes = recipes;
      }
    });
  }
}
