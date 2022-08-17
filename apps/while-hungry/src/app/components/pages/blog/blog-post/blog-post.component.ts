import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

// wh libraries
import { BlogService } from '@wh/core-data';
import { AppService } from '@wh/core-utils';

import { environment } from '@wh/env';

@Component({
  selector: 'wh-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
})
export class BlogPostComponent implements OnInit {
  environment = environment; // get env file pour picture requests
  post: any;
  isAuthor = false;

  constructor(
    public appService: AppService,
    public blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.blogService.find(id).subscribe((post: any) => {
        if (post) {
          this.post = post;
          this.appService.breadcrumb = [
            'While Hungry',
            'Blog',
            this.post.title,
          ];

          if (this.post.authorId === this.appService.getUserId()) this.isAuthor = true;
        } else {
          this.router.navigate(['/blog']);
        }
      });
    } else {
      this.router.navigate(['/blog']);
    }
  }

  editRecipe() {
    if (this.isAuthor) this.router.navigate(['/blog/post/edit/' + this.post.id]);
  }
}

