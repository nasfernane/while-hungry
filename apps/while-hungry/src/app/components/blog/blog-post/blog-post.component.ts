import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

// libraries
import * as moment from 'moment';
import { Observable } from 'rxjs';

// wh libraries
import { BlogService } from '@wh/core-data';
import { AppService } from '@wh/core-utils';

// schemas
import { Post } from '@prisma/client';


@Component({
  selector: 'wh-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  post: Post;

  constructor(
    public appService: AppService,
    public blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')

    if (id) {
      this.blogService.find(id).subscribe((post: Post) => {
        if (post) {
          this.post = post;
          this.appService.breadcrumb = ['While Hungry', 'Blog', this.post.title]
        } else {
          this.router.navigate(['/blog']);
        }
      })
    } else {
      this.router.navigate(['/blog']);
    }
  }

}
