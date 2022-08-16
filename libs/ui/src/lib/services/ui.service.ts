import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AppService } from '@wh/core-utils';

// components
import { LoginComponent } from './../components/login/login.component';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  loginDialogRef: any;

  constructor(
    private appService: AppService,
    private matDialog: MatDialog, 
    public _alert: MatSnackBar,
    private router: Router
  ) {}

  public openLogin(urlState: string | null = null) {
    this.loginDialogRef = this.matDialog.open(LoginComponent, {
      panelClass: 'form80',
      width: '50%',
    });

    // redirect to initial desired url if login OK
    if (urlState) this.loginDialogRef.afterClosed().subscribe(() => {
      this.router.navigate([urlState]);
    })
  }

  public closeLogin() {
    this.loginDialogRef.close();
  }

  public openAlert(message: string, seconds?: number) {
    this._alert.open(message, undefined, {
      duration: seconds ? seconds * 1000 : 2000,
      verticalPosition: 'top',
      panelClass: 'centered-snackbar',
    });
  }

  public openLoginAlert(urlState: string | null = null) {
    const alert = this._alert.open(
      'This action requires authentification',
      'login',
      { duration: 3000, verticalPosition: 'top' }
    );
    alert.onAction().subscribe(() => {
      this.openLogin(urlState);
    });
  }
}
