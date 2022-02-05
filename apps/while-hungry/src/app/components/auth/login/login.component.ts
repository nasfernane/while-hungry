import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from '@wh/core-data';
import { AppService } from '@wh/core-data';


@Component({
  selector: 'wh-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  hidePassword = true;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthentificationService,
    private appService: AppService,
  ) {
    this.loginForm = formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)]),
      password: new FormControl('', Validators.required),
    });
   }

  ngOnInit(): void {
    if (this.appService.userLogged) {
      this.router.navigate(['']);
    }
  }

  async login() {
    const email = this.loginForm.controls['email'].value
    const password = this.loginForm.controls['password'].value
    
    this.authService.login(email, password).subscribe((user: any) => {
      if (user && user.status === true) {
        this.appService.setUserData(user.data);

        if (this.route.snapshot.queryParams['returnUrl']) { // if user logged for a specific page
          this.router.navigate([this.route.snapshot.queryParams['returnUrl']]);
        } else {
          this.router.navigate(['']);
        }
      }
    });
  }

}