import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wh-blog-new-post',
  templateUrl: './blog-new-post.component.html',
  styleUrls: ['./blog-new-post.component.scss']
})
export class BlogNewPostComponent implements OnInit {
  ngOnInit(): void {
    console.log('blog new post')
  }

}
