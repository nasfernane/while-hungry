import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '@wh/core-utils';

@Component({
  selector: 'wh-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  constructor(public appService: AppService, private router: Router) {}

  navBreadcrumb(el: string) {
    const authorizedLinks = ['Recipes', 'Blog', 'Glossary'];
    if (authorizedLinks.includes(el)) {
      this.router.navigate([el.toLowerCase()]);
    } else if (el === 'While Hungry') {
      this.router.navigate(['home']);
    } else {
      return;
    }
  }
}
