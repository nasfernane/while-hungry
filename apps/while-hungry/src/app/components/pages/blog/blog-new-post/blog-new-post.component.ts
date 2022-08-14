import { Component, OnInit } from '@angular/core';
import { AppService } from '@wh/core-utils';

@Component({
  selector: 'wh-blog-new-post',
  templateUrl: './blog-new-post.component.html',
  styleUrls: ['./blog-new-post.component.scss'],
})
export class BlogNewPostComponent implements OnInit {
  constructor(
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.appService.breadcrumb = ['While Hungry', 'Blog', 'New Post']
    console.log('blog new post');
  }
}
