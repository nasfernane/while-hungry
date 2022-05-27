import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

// services
import { AppService } from '@wh/core-utils';
import { UiService } from '@wh/ui';
import { ReviewService } from '@wh/core-data';
import { RecipeReview } from '@prisma/client';

@Component({
  selector: 'wh-recipe-add-review',
  templateUrl: './recipe-add-review.component.html',
  styleUrls: ['./recipe-add-review.component.scss'],
})
export class RecipeAddReviewComponent implements OnInit {
  @Input() recipeId: number;
  @Output() updateEvent = new EventEmitter<boolean>();
  updating = false;
  reviewId: number;
  stars: Array<number>;
  userRating = 0;
  message: string;

  constructor(
    private appService: AppService,
    private uiService: UiService,
    private reviewService: ReviewService
  ) {
    this.stars = Array(5)
      .fill(1)
      .map((x, i) => i + 1); // fill the stars array with proper index
  }

  ngOnInit() {
    this.initReview();
  }

  // setup component for adding or updating at initialisation
  initReview() {
    if (this.appService.userLogged) {
      this.reviewService
        .checkIfReviewed(this.recipeId, this.appService.getUserId())
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
          recipeId: this.recipeId,
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
          recipeId: this.recipeId,
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
}
