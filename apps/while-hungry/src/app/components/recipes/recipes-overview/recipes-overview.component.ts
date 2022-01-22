import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '@wh/api-interfaces';
import { RecipeService } from '@wh/core-data';

@Component({
  selector: 'wh-recipes-overview',
  templateUrl: './recipes-overview.component.html',
  styleUrls: ['./recipes-overview.component.scss']
})
export class RecipesOverviewComponent implements OnInit {
  recipes$: Observable<Recipe[]>;
  constructor(
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.recipes$ = this.recipeService.all();
    console.log(this.recipes$)
  }

}
