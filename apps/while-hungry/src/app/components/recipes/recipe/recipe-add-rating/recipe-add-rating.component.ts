import { Component, Input, Output, EventEmitter } from '@angular/core';

// services
import { AppService } from '@wh/core-utils';
import { UiService } from '@wh/ui';
import { ReviewService } from '@wh/core-data';
import { RecipeReview } from '@prisma/client';

@Component({
  selector: 'wh-recipe-add-rating',
  templateUrl: './recipe-add-rating.component.html',
  styleUrls: ['./recipe-add-rating.component.scss']
})
export class RecipeAddRatingComponent {
  @Input() recipeId: number;
  @Output() updateEvent = new EventEmitter<boolean>();
  stars: Array<number>;
  userRating = 0;
  message: string;
  alreadyReviewed = false;

  constructor(
    private appService: AppService,
    private uiService: UiService,
    private reviewService: ReviewService
  ) {
    this.stars = Array(5).fill(1).map((x,i)=>i + 1); // fill the stars array with proper index
   }

  getIcon(position: number) {
    return position > this.userRating ? 'favorite_border' : 'favorite';
  }

  setRating(rating: number) {
    this.userRating = rating;
    this.message = this.setMessage();
  }

  setMessage() {
    switch(this.userRating) {
      case 1:
        return "This recipe killed half my family..."
      case 2: 
        return "That was pretty bad, mate."
      case 3: 
        return "Meh, can do better but it's all right"
      case 4: 
        return "Good recipe. Thanks !"
      case 5:
        return "Omg omg, best recipe ever !"
      default: 
        return "No default"
    }
  }

  async addReview() {
    if (this.appService.userLogged) {
      if (!this.alreadyReviewed) {
        this.reviewService.checkIfReviewed(this.recipeId, this.appService.getUserId()).subscribe((review: RecipeReview) => {
          this.alreadyReviewed = !!review;

          if (!this.alreadyReviewed) {
            const newReview = {
              recipeId: this.recipeId,
              authorId: this.appService.getUserId(),
              review: this.userRating,
            }
  
            this.reviewService.create(newReview).subscribe((review: RecipeReview) => {
              if (review) {
                this.uiService.openAlert('Review sent !')
                this.updateEvent.emit(true);

              }
            })
          } else {
            this.uiService.openAlert('You already reviewed this recipe')
          }
        })
      } else {
        this.uiService.openAlert('You already reviewed this recipe')
      }
    } else {
      this.uiService.openLoginAlert('This action requires authentification')
    }
  }
}
