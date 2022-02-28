import { Component, Input, OnInit } from '@angular/core';

// wh libraries
import { RecipeService, UserService } from '@wh/core-data';
import { UiService } from '@wh/ui';
import { AppService } from '@wh/core-utils';

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
  clapExists: boolean;

  constructor(
    private appService: AppService,
    private recipeService: RecipeService,
    private userService: UserService,
    private uiService: UiService,
  ) { }

  ngOnInit(): void {
    this.recipeService.getAuthorRecipeCount(this.author.id).subscribe((count) => {
      if (count && count !== 0) {
        this.authorRecipesCount = +count;
      }
    });

    this.userService.checkIfClapped(this.appService.getUserId(), this.author.id).subscribe((clapExists: boolean) => {
      this.clapExists = clapExists;
    });
  }

  clapUser() {
    if (this.appService.userLogged) {
      if (!this.clapExists) {
        this.userService.clapUser(this.appService.getUserId(), this.author.id).subscribe((clap) => {
          console.log('CLAPPING')
          console.log(clap)
        })
      } else {
        this.uiService.openAlert('You already clapped this mofo')
      }
    }
  }

}
