import { Component, OnInit } from '@angular/core';
import { AppService } from '@wh/core-utils';

@Component({
  selector: 'wh-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  constructor(
    public appService: AppService,
  ) { }

  ngOnInit(): void {
    this.appService.breadcrumb = ['While Hungry', 'Privacy Policy'];
  }

}
