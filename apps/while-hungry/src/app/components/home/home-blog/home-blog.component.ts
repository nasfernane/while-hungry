import { Component, OnInit } from '@angular/core';

// service
import { BlogService } from '@wh/core-data';

@Component({
  selector: 'wh-home-blog',
  templateUrl: './home-blog.component.html',
  styleUrls: ['./home-blog.component.scss']
})
export class HomeBlogComponent implements OnInit {
  post: any;

  constructor(
    private blogService: BlogService,
  ) { }

  ngOnInit(): void {
    this.findLastPost();
  }

  findLastPost() {
    this.blogService.findLast().subscribe((post) => {
      if (post) {
        this.post = post;
      }
    })
  }

}
