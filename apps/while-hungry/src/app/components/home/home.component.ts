import { Component, OnInit } from '@angular/core';
import { AppService } from '@wh/core-utils';

@Component({
  selector: 'wh-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.breadcrumb = [];
  }
}
