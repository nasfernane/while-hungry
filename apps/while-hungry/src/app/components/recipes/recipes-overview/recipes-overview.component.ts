import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, OnChanges, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Observable } from 'rxjs';
import { RecipeService } from '@wh/core-data';
import { AppService } from '@wh/core-utils';
import { Recipe } from '@prisma/client';

@Component({
  selector: 'wh-recipes-overview',
  templateUrl: './recipes-overview.component.html',
  styleUrls: ['./recipes-overview.component.scss']
})
export class RecipesOverviewComponent implements OnInit, OnDestroy, OnChanges {
  @Input() recipeName = '';
  recipes$: Observable<any[]>;
  @ViewChild(MatPaginator) 'paginator': MatPaginator;
  dataSource: MatTableDataSource<Recipe> = new MatTableDataSource<Recipe>();

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private recipeService: RecipeService,
    public appService: AppService
  ) {}

  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();
    this.fetchData();
    // if component is not called from new recipe form, we set breadcrumb
    if (!this.recipeName) this.appService.breadcrumb = ['While Hungry', 'Recipes', 'Overview']
  }
  
  ngOnChanges() {
    this.fetchData();
  }

  ngOnDestroy() {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }
  }

  fetchData() {
    // if checking for specific recipes for new recipe form
    if (this.recipeName) {
      this.getDataWithName() 
    } else {
      this.getData();
    }
  }

  getData(filters?: any) {
    if (filters) {
      this.recipeService.allWithFilters(filters).subscribe((recipes: Recipe[]) => {
        if (recipes) this.linkDataSource(recipes);
        
      })
    } else {
      this.recipeService.all().subscribe((recipes: Recipe[]) => {
        if (recipes) this.linkDataSource(recipes);
      })
    }
  }

  getDataWithName() {
    this.recipeService.allWithName(this.recipeName).subscribe((recipes: Recipe[]) => {
      if (recipes) this.linkDataSource(recipes);
    })
  }

  linkDataSource(recipes: Recipe[]) {
    this.dataSource = new MatTableDataSource<Recipe>(recipes);
    this.dataSource.paginator = this.paginator;
    this.recipes$ = this.dataSource.connect();
  }

  favoriteEvent(event: boolean) {
    if (event) this.getData();
  }
}
