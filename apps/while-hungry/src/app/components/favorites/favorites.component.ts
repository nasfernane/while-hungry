import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

// services
import { AppService } from '@wh/core-utils';
import { FavoritesService } from '@wh/core-data';

// schema
import { RecipeFavorite } from '@prisma/client';

@Component({
  selector: 'wh-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit, OnDestroy  {
  favorites$: Observable<any[]>;
  @ViewChild(MatPaginator) 'paginator': MatPaginator;
  dataSource: MatTableDataSource<RecipeFavorite> = new MatTableDataSource<RecipeFavorite>();

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private appService: AppService,
    private favoritesService: FavoritesService
  ) { }

  ngOnInit(): void {
    this.appService.breadcrumb = ['While Hungry', 'Your favorites']
    this.changeDetectorRef.detectChanges();
    this.getData();
  }

  ngOnDestroy() {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }
  }

  getData(filters?: any) {
    if (filters) {
      this.favoritesService.allWithFilters(this.appService.getUserId(), filters).subscribe((favorites: RecipeFavorite[]) => {
        if (favorites) this.linkDataSource(favorites);
        
      })
    } else {
      this.favoritesService.all(this.appService.getUserId()).subscribe((favorites: RecipeFavorite[]) => {
        if (favorites) this.linkDataSource(favorites);
      })
    }
  }

  linkDataSource(favorites: RecipeFavorite[]) {
    this.dataSource = new MatTableDataSource<RecipeFavorite>(favorites);
    this.dataSource.paginator = this.paginator;
    this.favorites$ = this.dataSource.connect();
  }
}
