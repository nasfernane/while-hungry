import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, OnChanges, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Observable } from 'rxjs';
import { RecipeService } from '@wh/core-data';
import { AppService } from '@wh/core-utils';
import { Router } from '@angular/router';
import { UiService } from '@wh/ui';

import { RecipeFull } from '@wh/core-data';


@Component({
  selector: 'wh-recipes-overview',
  templateUrl: './recipes-overview.component.html',
  styleUrls: ['./recipes-overview.component.scss'],
})
export class RecipesOverviewComponent implements OnInit, OnDestroy, OnChanges {
  @Input() recipeName = '';
  recipes$: Observable<RecipeFull[]>;
  @ViewChild(MatPaginator) 'paginator': MatPaginator;
  dataSource: MatTableDataSource<RecipeFull> = new MatTableDataSource<RecipeFull>();

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private recipeService: RecipeService,
    private router: Router,
    private uiService: UiService,
    public appService: AppService
  ) {
    
  }

  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();
    this.fetchData();

    // if component is not called from new recipe form, we set breadcrumb
    if (!this.recipeName)
      this.appService.breadcrumb = ['While Hungry', 'Recipes', 'Overview'];
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
      this.getDataWithName();
    } else {
      this.getData();
    }
  }

  getData(filters?: any) {
    if (filters) {
      this.recipeService
        .allWithFilters(filters)
        .subscribe((recipes: RecipeFull[]) => {
          if (recipes) this.linkDataSource(recipes);
        });
    } else {
      this.recipeService.all().subscribe((recipes: RecipeFull[]) => {
        if (recipes) this.linkDataSource(recipes);
      });
    }
  }

  getDataWithName() {
    this.recipeService
      .allWithName(this.recipeName)
      .subscribe((recipes: RecipeFull[]) => {
        if (recipes) this.linkDataSource(recipes);
      });
  }

  linkDataSource(recipes: RecipeFull[]) {
    this.dataSource = new MatTableDataSource<RecipeFull>(recipes);
    this.dataSource.filterPredicate = function customFilter(data , filter:string ): boolean {
      let tags = '';
      
      for (const el of data.recipeTags) tags += el.tag.name;
    
      return (
        data.name.toLowerCase().includes(filter)
        || data.description.toLowerCase().includes(filter)
        || data.author.nickname.toLowerCase().includes(filter)
        || tags.toLowerCase().includes(filter)
      );
      
  }
    this.dataSource.paginator = this.paginator;
    this.recipes$ = this.dataSource.connect();
  }

  applyQuicksearch(filterValue: string = '') {
    this.dataSource.filter = filterValue;
  }

  favoriteEvent(event: boolean) {
    if (event) this.getData();
  }

  navNewRecipe() {
    if (this.appService.isLogged()) {
      this.router.navigate(['recipes', 'add']);
    } else {
      this.uiService.openLoginAlert();
    }
  }
}
