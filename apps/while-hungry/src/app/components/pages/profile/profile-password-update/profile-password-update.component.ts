import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

// services
import { AuthentificationService } from '@wh/core-data';
import { AppService } from '@wh/core-utils';
import { UiService } from '@wh/ui';

@Component({
  selector: 'wh-profile-password-update',
  templateUrl: './profile-password-update.component.html',
  styleUrls: ['./profile-password-update.component.scss'],
})
export class ProfilePasswordUpdateComponent {
  user: any;
  pwForm: FormGroup;
  passwordError = false;

  hideOldPassword = true;
  hidePassword = true;
  hidePasswordConfirm = true;

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService,
    private authService: AuthentificationService,
    private uiService: UiService
  ) {
    this.user = this.appService.getUser();
    this.pwForm = formBuilder.group({
      oldPassword: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      passwordConfirm: new FormControl('', Validators.required),
    });
  }

  updatePassword() {
    const oldPassword = this.pwForm.controls['oldPassword'].value;
    const password = this.pwForm.controls['password'].value;
    const passwordConfirm = this.pwForm.controls['passwordConfirm'].value;

    if (password === passwordConfirm) {
      this.authService
        .updatePassword(this.user.id, { oldPassword, password })
        .subscribe((res: any) => {
          if (res && res.accessToken) {
            this.appService.setUserData(res);
            this.uiService.openAlert('Password updated');
          } else {
            this.uiService.openAlert('Error during password update');
          }
        });
    } else {
      this.passwordError = true;
    }
  }
}
