import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

// services
import { AuthentificationService } from '@wh/core-data';
import { AppService } from '@wh/core-utils';
import { UiService } from './../../services/ui.service';

@Component({
  selector: 'wh-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;
  hidePassword = true;
  hideRegisterPassword = true;
  hideRegisterPasswordConfirm = true;
  invalidLogin = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthentificationService,
    private appService: AppService,
    private uiService: UiService
  ) {
    this.loginForm = formBuilder.group({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i
        ),
      ]),
      password: new FormControl('', Validators.required),
    });

    this.registerForm = formBuilder.group({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i
        ),
      ]),
      nickname: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      passwordConfirm: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    if (this.appService.userLogged) this.uiService.closeLogin();
  }

  async login() {
    const email = this.loginForm.controls['email'].value;
    const password = this.loginForm.controls['password'].value;

    this.authService.login(email, password).subscribe((res: any) => {
      if (res && res.accessToken) {
        this.appService.setUserData(res);
        this.uiService.closeLogin();
        this.uiService.openAlert('Login successful');
        this.invalidLogin = false;

        if (this.route.snapshot.queryParams['returnUrl']) {
          // if user logged for a specific page
          this.router.navigate([this.route.snapshot.queryParams['returnUrl']]);
        }
      } else {
        this.invalidLogin = true;
      }
    });
  }

  register() {
    const email = this.registerForm.controls['email'].value;
    const nickname = this.registerForm.controls['nickname'].value;
    const password = this.registerForm.controls['password'].value;
    const passwordConfirm = this.registerForm.controls['passwordConfirm'].value;

    this.authService
      .register(email, nickname, password, passwordConfirm)
      .subscribe((user: any) => {
        if (user && user.accessToken) {
          this.appService.setUserData(user);
          this.uiService.closeLogin();
          this.uiService.openAlert('Register successful');

          if (this.route.snapshot.queryParams['returnUrl']) {
            // if user signup for a specific page
            this.router.navigate([
              this.route.snapshot.queryParams['returnUrl'],
            ]);
          } else {
            this.router.navigate(['']);
          }
        }
      });
  }
}
