import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';

//services
import { RecipeCommentService } from '@wh/core-data';
import { UiService } from '@wh/ui';
import { AppService } from '@wh/core-utils';

// schemas
import { RecipeComment } from '@prisma/client';

import {
  FormBuilder,
  FormGroup,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'wh-recipe-comments',
  templateUrl: './recipe-comments.component.html',
  styleUrls: ['./recipe-comments.component.scss'],
})
export class RecipeCommentsComponent implements OnInit, OnChanges {
  @Output() updateEvent = new EventEmitter<boolean>();
  @Input() recipe: any;
  commentForm: FormGroup;
  comments: any[];

  constructor(
    private formBuilder: FormBuilder,
    private recipeCommentService: RecipeCommentService,
    public appService: AppService,
    private uiService: UiService,
  ) {
    this.commentForm = formBuilder.group({
      comment: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.comments = this.recipe.recipeComments;
  }

  ngOnChanges() {
    this.comments = this.recipe.recipeComments;
  }

  
  postComment() {
    if (this.appService.userLogged) {
      const comment = this.commentForm.controls['comment'].value;

      if (comment) {
        this.recipeCommentService
          .create({
            recipeId: this.recipe.id,
            userId: this.appService.getUserId(),
            comment: comment,
          })
          .subscribe((comment: RecipeComment) => {
            this.uiService.openAlert('Comment posted !');
            this.updateEvent.emit(true);
          });
      }
    } else {
      this.uiService.openLoginAlert();
    }
  }
}
