import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '@wh/core-utils';

@Component({
  selector: 'wh-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {
  @Input() post: any;
  @Input() truncate: number;

  constructor(
    public appService: AppService,
  ) { }

  ngOnInit(): void {
    console.log(this.post)
  }

}