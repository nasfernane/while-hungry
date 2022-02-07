import { Component, OnInit } from '@angular/core';
import { AppService } from '@wh/core-data';

@Component({
  selector: 'wh-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  constructor(
    public appService: AppService,
  ) { }

  ngOnInit(): void {
    console.log('breadcrumb loaded !')
  }

}
