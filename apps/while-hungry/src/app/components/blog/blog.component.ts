import { Component, OnInit } from '@angular/core';
import { BlogService } from '@wh/core-data';
import { AppService } from '@wh/core-data';
import * as moment from 'moment';
import { Observable } from 'rxjs';

import { Post } from '@prisma/client';

@Component({
  selector: 'wh-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(
    public blogService: BlogService,
    public appService: AppService,
  ) { }

  ngOnInit(): void {
    this.appService.breadcrumb = ['While Hungry', 'Blog', 'Overview']
    this.posts$ = this.blogService.all();
  }

}
