import { Component, Input, OnInit } from '@angular/core';

// wh libraries
import { RecipeService, UserService } from '@wh/core-data';
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

  constructor(
    private appService: AppService,
    private recipeService: RecipeService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.recipeService.getAuthorRecipeCount(this.author.id).subscribe((count) => {
      if (count && count !== 0) {
        this.authorRecipesCount = +count;
      }
    });
  }

  clapUser() {
    if (this.appService.userLogged) {
      const clapperId = this.appService.getUserId();
      const clappedId = this.author.id

      this.userService.clapUser(clapperId, clappedId).subscribe((clap) => {
        console.log('CLAPPING')
        console.log(clap)
      })
    }
    
  }

}
