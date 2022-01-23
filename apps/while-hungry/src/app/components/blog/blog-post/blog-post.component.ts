import { Component, OnInit } from '@angular/core';
// import { BlogService } from 'src/app/services/blog.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import * as moment from 'moment';

import { Post } from '@prisma/client';


@Component({
  selector: 'wh-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  post: Post;
  id: string;

  constructor(
    // public blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')

    if (id) {
      // this.blogService.getArticle(id).subscribe((post: any) => {
      //   if (post.data) {
      //     post.updatedAt = moment(post.updatedAt).format('MMM Do YYYY');
      //     this.post = post.data;
      //   } else {
      //     this.router.navigate(['/blog']);
      //   }
      // })
    }
  }

}
