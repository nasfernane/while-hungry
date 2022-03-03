import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

// services
import { BlogService } from '@wh/core-data';
import { AppService } from '@wh/core-utils';

// libraries
import { Observable } from 'rxjs';

import { Post } from '@prisma/client';

@Component({
  selector: 'wh-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, OnDestroy {
  posts$: Observable<Post[]>;
  @ViewChild(MatPaginator) 'paginator': MatPaginator;
  dataSource: MatTableDataSource<Post> = new MatTableDataSource<Post>();

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    public blogService: BlogService,
    public appService: AppService,
  ) { }

  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();
    this.appService.breadcrumb = ['While Hungry', 'Blog', 'Overview']
    this.getData();
  }

  getData() {
    this.blogService.all().subscribe((posts: Post[]) => {
      if (posts) this.linkDataSource(posts);
    })
  }

  linkDataSource(posts: Post[]) {
    this.dataSource = new MatTableDataSource<Post>(posts);
    this.dataSource.paginator = this.paginator;
    this.posts$ = this.dataSource.connect();
  }

  ngOnDestroy() {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }
  }

}
