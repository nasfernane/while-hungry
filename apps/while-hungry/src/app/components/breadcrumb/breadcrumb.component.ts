import { Component, OnInit } from '@angular/core';
import { AppService } from '@wh/core-utils';

@Component({
  selector: 'wh-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {

  constructor(
    public appService: AppService,
  ) { }

}
