import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

// wh libraries
import { RecipeService, UserService } from '@wh/core-data';
import { UiService } from '@wh/ui';
import { AppService } from '@wh/core-utils';


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
    this.recipeService.getAuthorRecipeCount(this.author.id).subscribe((count) => {
      if (count && count !== 0) {
        this.authorRecipesCount = +count;
      }
    });

    if (this.appService.isLogged()) {
      this.userService.checkIfClapped(this.appService.getUserId(), this.author.id).subscribe((alreadyClapped: boolean) => {
        this.alreadyClapped = alreadyClapped;
      });
    } else {
      this.alreadyClapped = false;
    }

    

   this.setUserClapsCount();
  }

  clapUser() {
    if (this.appService.userLogged) {
      if (!this.alreadyClapped) {
        this.userService.clapUser(this.appService.getUserId(), this.author.id).subscribe((clap) => {
          if (clap) {
            this.alreadyClapped = true;
            this.uiService.openAlert(`You clapped ${this.author.nickname}. Good job !`);
            this.setUserClapsCount();
          } 
        })
      } else {
        this.uiService.openAlert('You already clapped this contributor')
      }
    } else {
      this.uiService.openLoginAlert()
    }
  }

  setUserClapsCount() {
    this.userService.getUserClapsCount(this.author.id).subscribe((count: number) => {
      this.authorClaps = count;
    });
  }

}
