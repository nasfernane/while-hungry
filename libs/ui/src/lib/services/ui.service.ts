import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

// components
import { LoginComponent } from '@wh/ui';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  loginDialogRef: any;

  constructor(
    private matDialog: MatDialog,
    public _alert: MatSnackBar,
  ) {}

  public openLogin() {
    this.loginDialogRef = this.matDialog.open(LoginComponent, {
      panelClass: 'form80',
    })
  }

  public closeLogin() {
    this.loginDialogRef.close();
  }

  public openAlert(message: string, seconds?: number) {
    this._alert.open(message, undefined, { duration: seconds ? seconds * 1000 : 2000, verticalPosition: 'top'});
  }

  public openLoginAlert(message: string) {
    this._alert.open(message, 'Login', { duration: 3000, verticalPosition: 'top'})
  }
}
