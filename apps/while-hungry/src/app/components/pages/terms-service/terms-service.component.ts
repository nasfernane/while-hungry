import { Component, OnInit } from '@angular/core';
import { AppService } from '@wh/core-utils';

@Component({
  selector: 'wh-terms-service',
  templateUrl: './terms-service.component.html',
  styleUrls: ['./terms-service.component.scss']
})
export class TermsServiceComponent implements OnInit {

  constructor(
    private appService: AppService,
  ) { }

  ngOnInit(): void {
    this.appService.breadcrumb = ['While Hungry', 'Terms of Service'];
  }

}
