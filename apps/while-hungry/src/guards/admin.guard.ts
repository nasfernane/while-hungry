import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from '@wh/core-data';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(
    public appService: AppService,
    public router: Router,
  ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('context')
    console.log(context)
    if (this.appService.userLogged) {
      return true;
    } else {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }
}

