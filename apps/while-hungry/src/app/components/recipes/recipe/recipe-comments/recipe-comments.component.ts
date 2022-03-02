import { Component, Input, OnInit, OnChanges } from '@angular/core';

//services
import { RecipeCommentService } from '@wh/core-data';
import { AppService } from '@wh/core-utils';

// schemas
import { RecipeComment } from '@prisma/client';

@Component({
  selector: 'wh-recipe-comments',
  templateUrl: './recipe-comments.component.html',
  styleUrls: ['./recipe-comments.component.scss']
})
export class RecipeCommentsComponent implements OnInit, OnChanges {
  @Input() recipe: any;
  comments: any[];

  constructor(
    private recipeCommentService: RecipeCommentService,
    public appService: AppService,
  ) { }

  ngOnInit(): void {
    this.comments = this.recipe.recipeComments;
  }

  ngOnChanges() {
    this.comments = this.recipe.recipeComments;
  }

}
