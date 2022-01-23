import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from '@wh/core-data';

@Component({
  selector: 'wh-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent {

  constructor(
    private router: Router,
    public appService: AppService,
  ) { }

    /**
   * Log out and redirects to Home
   */
  logout() {
    this.appService.logout();
    this.router.navigate(['']);
  }

}
