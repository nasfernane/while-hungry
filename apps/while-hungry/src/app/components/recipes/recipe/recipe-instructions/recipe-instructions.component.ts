import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

// services
import { AppService } from '@wh/core-utils';
import { FavoritesService, RecipeService } from '@wh/core-data';
import { UiService } from '@wh/ui';
import { RecipeCommentService } from '@wh/core-data';

// prisma schemas
import { RecipeComment, RecipeInstruction } from '@prisma/client';
import { RecipeNote } from '@prisma/client';

@Component({
  selector: 'wh-recipe-instructions',
  templateUrl: './recipe-instructions.component.html',
  styleUrls: ['./recipe-instructions.component.scss']
})
export class RecipeInstructionsComponent implements OnInit {
  @Input() recipe: any;
  @Output() updateEvent = new EventEmitter<boolean>();
  instructions: RecipeInstruction[];
  notes: RecipeNote[];
  recipeInFavorites: boolean;
  commentForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService,
    private favoritesService: FavoritesService,
    private recipeService: RecipeService,
    private recipeCommentsService: RecipeCommentService,
    private uiService: UiService,
  ) {
    this.commentForm = formBuilder.group({
      comment: new FormControl('')
    })
  }

  ngOnInit(): void {
    this.instructions = this.recipe.recipeInstructions;
    this.notes = this.recipe.recipeNotes;
    this.checkFavorite();
  }

  async addOrRemoveFavorite() {
    if (this.appService.userLogged) {
      this.favoritesService.addOrRemoveFavorite(+this.recipe.id, this.appService.getUserId(), !this.recipeInFavorites).subscribe(res => {
        if (res) {
          this.recipeInFavorites = !this.recipeInFavorites;

          if (this.recipeInFavorites) {
            this.uiService.openAlert('Recipe added to your favorites')
          } else {
            this.uiService.openAlert('Recipe removed from your favorites')
          }
        }
      });
    } else {
      this.uiService.openLoginAlert()
    }
  }

  checkFavorite() {
    if (this.appService.userLogged) {
      const userId = this.appService.getUserId();

      if (this.recipe.recipeFavorites.length > 0) {
        for (const element of this.recipe.recipeFavorites) {
          if (element.userId === userId) {
            this.recipeInFavorites = true;
            break;
          }
        }
      }
    }
  }

  printRecipe() {
    this.uiService.openAlert('Available soon');
  }

  postComment() {
    if (this.appService.userLogged) {
      const comment = this.commentForm.controls['comment'].value;

      if (comment) {
        this.recipeCommentsService.create({
          recipeId: this.recipe.id,
          userId: this.appService.getUserId(),
          comment: comment
        }).subscribe((comment: RecipeComment) => {
          this.uiService.openAlert('Comment posted !')
          this.updateEvent.emit(true);
        })
      }
    } else {
      this.uiService.openLoginAlert();
    }
  }
}
