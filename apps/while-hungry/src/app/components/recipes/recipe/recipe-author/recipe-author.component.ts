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
  authorClaps: number;
  alreadyClapped: boolean;

  constructor(
    private appService: AppService,
    private recipeService: RecipeService,
    private userService: UserService,
    private uiService: UiService,
  ) { }

  ngOnInit(): void {
    console.log(this.author)
    this.recipeService.getAuthorRecipeCount(this.author.id).subscribe((count) => {
      if (count && count !== 0) {
        this.authorRecipesCount = +count;
      }
    });

    this.userService.checkIfClapped(this.appService.getUserId(), this.author.id).subscribe((alreadyClapped: boolean) => {
      this.alreadyClapped = alreadyClapped;
    });

    this.userService.getUserClapsCount(this.author.id).subscribe((count: number) => {
      this.authorClaps = count;
    });
  }

  clapUser() {
    if (this.appService.userLogged) {
      if (!this.alreadyClapped) {
        this.userService.clapUser(this.appService.getUserId(), this.author.id).subscribe((clap) => {
          if (clap) {
            this.alreadyClapped = true;
            this.authorClaps++;
          } 
        })
      } else {
        this.uiService.openAlert('You already clapped this contributor')
      }
    } else {
      this.uiService.openLoginAlert("You must be logged in")
    }
  }

}
