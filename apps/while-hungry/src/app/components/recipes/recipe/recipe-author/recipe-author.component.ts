import { Component, Input, OnInit } from '@angular/core';

// wh libraries
import { RecipeService } from '@wh/core-data';

// libraries
import { Observable } from 'rxjs';

@Component({
  selector: 'wh-recipe-author',
  templateUrl: './recipe-author.component.html',
  styleUrls: ['./recipe-author.component.scss']
})
export class RecipeAuthorComponent implements OnInit {
  @Input() author: any;
  authorRecipesCount: number;

  constructor(
    private recipeService: RecipeService,
  ) { }

  ngOnInit(): void {
    this.recipeService.getAuthorRecipeCount(this.author.id).subscribe((count) => {
      if (count && count !== 0) {
        this.authorRecipesCount = +count;
      }
    });
  }

}
