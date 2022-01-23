import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

// import * as moment from 'moment';

import { Observable } from 'rxjs';
import { RecipeService } from '@wh/core-data';
import { AppService } from '@wh/core-data';
import { Recipe } from '@prisma/client';

@Component({
  selector: 'wh-recipes-overview',
  templateUrl: './recipes-overview.component.html',
  styleUrls: ['./recipes-overview.component.scss']
})
export class RecipesOverviewComponent implements OnInit, OnDestroy {
  recipes$: Observable<any[]>;
  @ViewChild(MatPaginator) 'paginator': MatPaginator;
  dataSource: MatTableDataSource<Recipe> = new MatTableDataSource<Recipe>();

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private recipeService: RecipeService,
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();
    this.getData();
    this.appService.breadcrumb = ['While Hungry', 'Recipes', 'Overview']
  }

  ngOnDestroy() {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }
  }

  getData() {
    this.recipeService.all().subscribe((recipes: Recipe[]) => {
      this.dataSource = new MatTableDataSource<Recipe>(recipes);
      this.dataSource.paginator = this.paginator;
      this.recipes$ = this.dataSource.connect();
      console.log(this.recipes$);
    })
  }

  favoriteEvent(event: boolean) {
    if (event) this.getData();
  }
}
