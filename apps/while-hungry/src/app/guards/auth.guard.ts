import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from '@wh/core-utils';
import { UiService } from '@wh/ui';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    public appService: AppService,
    public router: Router,
    private uiService: UiService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.appService.userLogged) {
      return true;
    } else {
      console.log('state.url')
      console.log(state.url)
      this.uiService.openLoginAlert(state.url);
      // this.router.navigate(['/login'], {
      //   queryParams: { returnUrl: state.url },
      // });
      return false;
    }
  }
}
