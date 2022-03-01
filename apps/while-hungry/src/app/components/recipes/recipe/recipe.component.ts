import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '@wh/core-data';
import { AppService } from '@wh/core-utils';
import { UiService } from '@wh/ui';

import { Recipe } from '@prisma/client';
import { RecipeReview } from '@prisma/client';

import { Observable } from 'rxjs';

@Component({
  selector: 'wh-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  @Input() recipe: any;
  recipeId: string;
  userId: number;
  recipeInFavorites = false;

  constructor(
    public appService: AppService,
    private route: ActivatedRoute,
    private router: Router,
    public recipeService: RecipeService,
    private uiService: UiService,
    ) { }

  async ngOnInit() {
    this.recipeId = this.recipe ? this.recipe.id : this.route.snapshot.paramMap.get('id');

    if (!this.recipe) {
      if (this.recipeId) {
        this.getData(this.recipeId);
      } else {
        this.router.navigate(['/recipes']);
      }
    }
  }

  async getData(id: string) {
    this.recipeService.find(id).subscribe((recipe: Recipe) => {
      if (recipe) {
        this.appService.breadcrumb = ['While Hungry', 'Recipe', recipe.name]
        this.recipe = recipe;
      } else {
        this.router.navigate(['/recipes']);
      }
    })
  }


}
