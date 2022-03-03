import { Component, OnInit } from '@angular/core';

// services
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
    this.getLastRecipe();
  }

  getLastRecipe() {
    this.recipeService.findLast().subscribe((recipe) => {
      if (recipe) {
        this.recipe = recipe;
        console.log(this.recipe);
      }
    })
  }

}
