import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '@wh/core-data';
import { AppService } from '@wh/core-utils';
import { UiService } from '@wh/ui';

@Component({
  selector: 'wh-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {
  user: any;
  profileForm: FormGroup;

   constructor(
    private formBuilder: FormBuilder,
    private appService: AppService,
    private userService: UserService,
    private uiService: UiService,
  ) { 
    this.user = this.appService.getUser();
    this.profileForm = formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.pattern(/^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)]),
      nickname: new FormControl('', Validators.required),
      bio: new FormControl(''),
    })
  }

  ngOnInit(): void {
    this.profileForm.controls['email'].setValue(this.user.email);
    this.profileForm.controls['nickname'].setValue(this.user.nickname);
    this.profileForm.controls['bio'].setValue(this.user.bio);
  }

  updateUser() {
    const updatedUser = {
      email: this.profileForm.controls['email'].value,
      nickname: this.profileForm.controls['nickname'].value,
      bio: this.profileForm.controls['bio'].value,
    }

    this.userService.update(this.user.id, updatedUser).subscribe((res: any) => {
      if (res && res.accessToken) {
        this.appService.setUserData(res);
        this.uiService.openAlert('Profile updated')
      } else {
        this.uiService.openAlert('Error during profile update')
      }
    })
  }
}
