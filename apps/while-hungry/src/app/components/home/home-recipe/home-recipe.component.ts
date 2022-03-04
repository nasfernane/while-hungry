import { Component, OnInit } from '@angular/core';

// service
import { RecipeService } from '@wh/core-data';

@Component({
  selector: 'wh-home-recipe',
  templateUrl: './home-recipe.component.html',
  styleUrls: ['./home-recipe.component.scss']
})
export class HomeRecipeComponent implements OnInit {
  recipe: any;

  constructor(
    private recipeService: RecipeService,
  ) { }

  ngOnInit(): void {
    this.findLastRecipe();
  }

  findLastRecipe() {
    this.recipeService.findLast().subscribe((recipe) => {
      if (recipe) {
        this.recipe = recipe;
      }
    })
  }

}
