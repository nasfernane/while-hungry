import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService, RecipeService } from '@wh/core-data';

import { Recipe } from '@prisma/client';

@Component({
  selector: 'wh-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  recipe: Recipe;

  constructor(
    public appService: AppService,
    private route: ActivatedRoute,
    private router: Router,
    public recipeService: RecipeService,
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.recipeService.find(id).subscribe((recipe: Recipe) => {
        if (recipe) {
          console.log(recipe);
          this.recipe = recipe;
          this.appService.breadcrumb = ['While Hungry', 'Recipe', this.recipe.name]
        } else {
          this.router.navigate(['/blog']);
        }
      })
    }
  }

}
