import { Component, Input } from '@angular/core';

// services
import { RecipeService } from '@wh/core-data';
import { AppService } from '@wh/core-utils';
import { UiService } from '@wh/ui';

@Component({
  selector: 'wh-recipe-add-rating',
  templateUrl: './recipe-add-rating.component.html',
  styleUrls: ['./recipe-add-rating.component.scss']
})
export class RecipeAddRatingComponent {
  @Input() recipeId: number;
  stars: Array<number>;
  userRating = 0;
  message = '';

  constructor(
    private recipeService: RecipeService,
    private appService: AppService,
    private uiService: UiService,
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

  addReview() {
    if (this.appService.userLogged) {
      console.log(this.recipeId)
    } else {
      this.uiService.openLoginAlert('This action requires authentification')
    }
  }

}
