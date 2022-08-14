import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

// services
import { AppService } from '@wh/core-utils';
import { UiService } from '@wh/ui';
import { ReviewService } from '@wh/core-data';
import { RecipeReview } from '@prisma/client';
import moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'wh-recipe-review-or-edit',
  templateUrl: './recipe-review-or-edit.component.html',
  styleUrls: ['./recipe-review-or-edit.component.scss'],
})
export class RecipeReviewOrEditComponent implements OnInit {
  @Input() recipe: any;
  @Output() updateEvent = new EventEmitter<boolean>();
  isAuthor = false;
  updating = false;
  reviewId: number;
  stars: Array<number>;
  userRating = 0;
  message: string;

  constructor(
    private appService: AppService,
    private uiService: UiService,
    private reviewService: ReviewService,
    private router: Router,
  ) {
    this.stars = Array(5)
      .fill(1)
      .map((x, i) => i + 1); // fill the stars array with proper index
  }

  ngOnInit() {
    if (this.appService.userLogged) {
      this.isAuthor = this.appService.getUserId() === this.recipe.authorId;
      if (!this.isAuthor) this.initReview();
    } else {
      this.initReview();
    }
  }

  // setup component for adding or updating at initialisation
  initReview() {
    if (this.appService.userLogged) {
      this.reviewService
        .checkIfReviewed(this.recipe.id, this.appService.getUserId())
        .subscribe((review: RecipeReview) => {
          if (review) {
            this.updating = true;
            this.userRating = review.review;
            this.message = this.setMessage();
            this.reviewId = review.id;
          }
        });
    }
  }

  // get hearts visual depending on user rating
  getIcon(position: number) {
    return position > this.userRating ? 'star_border' : 'star';
  }

  // update rating value and message
  setRating(rating: number) {
    this.userRating = rating;
    this.message = this.setMessage();
  }

  setMessage() {
    switch (this.userRating) {
      case 1:
        return 'This recipe killed half my family...';
      case 2:
        return 'That was pretty bad, mate.';
      case 3:
        return "Meh, can do better but it's all right";
      case 4:
        return 'Good recipe. Thanks !';
      case 5:
        return 'Omg omg, best recipe ever !';
      default:
        return 'No default';
    }
  }

  // add or update review depending if user already posted a review for this recipe
  async addOrUpdateReview() {
    if (this.appService.userLogged) {
      if (!this.updating) {
        // creating the review
        const newReview = {
          recipeId: this.recipe.id,
          authorId: this.appService.getUserId(),
          review: this.userRating,
        };

        this.reviewService
          .create(newReview)
          .subscribe((review: RecipeReview) => {
            if (review) {
              this.afterUpdateData('Review sent !');
            }
          });
      } else {
        // updating the review
        const updatedReview = {
          recipeId: this.recipe.id,
          authorId: this.appService.getUserId(),
          review: this.userRating,
        };

        this.reviewService
          .update(this.reviewId, updatedReview)
          .subscribe((review: RecipeReview) => {
            if (review) {
              this.afterUpdateData('Review updated !');
            }
          });
      }
    } else {
      this.uiService.openLoginAlert();
    }
  }

  // refresh data after each creation or update
  afterUpdateData(message: string) {
    this.uiService.openAlert(message);
    this.initReview();
    this.updateEvent.emit(true);
  }

  editRecipe() {
    if (this.isAuthor) this.router.navigate(['/recipes/edit/', this.recipe.id])
  }

  getEditRecipeSentence() {
    return moment(this.recipe.updatedAt).isAfter(moment(this.recipe.createdAt))
      ? 'You last edited this recipe on'
      : 'You created this recipe on'
  }

  getEditRecipeDate() {
    return moment(this.recipe.updatedAt).isAfter(moment(this.recipe.createdAt))
      ? moment(this.recipe.updatedAt).format('MM/DD/YYYY @ hh:mm A')
      : moment(this.recipe.createdAt).format('MM/DD/YYYY @ hh:mm A')
  }
}
