import { Component, OnInit } from '@angular/core';
// import { BlogService } from 'src/app/services/blog.service';
import { AppService } from '@wh/core-data';
import * as moment from 'moment';

import { Post } from '@prisma/client';

@Component({
  selector: 'wh-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  posts: Array<Post> = [];

  constructor(
    // public blogService: BlogService,
    public appService: AppService,
  ) { }

  ngOnInit(): void {
    console.log('blog !');
    // this.blogService.getArticles().subscribe((posts: any) => {
    //   if (posts) {
    //     for (let post of posts.data) {
    //       post.updatedAt = moment(post.updatedAt).format('MMM Do YYYY');
    //     }
    //     this.posts = posts.data;
    //   }
    // })
  }

}
