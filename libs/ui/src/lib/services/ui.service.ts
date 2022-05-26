import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

// components
import { LoginComponent } from './../components/login/login.component';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  loginDialogRef: any;

  constructor(private matDialog: MatDialog, public _alert: MatSnackBar) {}

  public openLogin() {
    this.loginDialogRef = this.matDialog.open(LoginComponent, {
      panelClass: 'form80',
      width: '50%',
    });
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

  public openLoginAlert() {
    const alert = this._alert.open(
      'This action requires authentification',
      'login',
      { duration: 3000, verticalPosition: 'top' }
    );
    alert.onAction().subscribe(() => {
      this.openLogin();
    });
  }
}
