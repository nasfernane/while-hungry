import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

// services
import { AppService } from '@wh/core-utils';
import { UserService } from '@wh/core-data';
import { UiService } from '@wh/ui';

@Component({
  selector: 'wh-profile-avatars',
  templateUrl: './profile-avatars.component.html',
  styleUrls: ['./profile-avatars.component.scss'],
})
export class ProfileAvatarsComponent {
  avatarSize = '12rem';
  avatarActive: string;

  avatarsFemale: string[] = ['avatar1', 'avatar2', 'avatar3', 'avatar4'];

  avatarsMale: string[] = ['avatar5', 'avatar6', 'avatar7', 'avatar8'];

  avatarsNetwork: string[] = ['avatar9', 'avatar10', 'avatar11', 'avatar12'];

  constructor(
    private appService: AppService,
    private userService: UserService,
    private uiService: UiService,
    private dialogRef: MatDialogRef<ProfileAvatarsComponent>
  ) {
    this.avatarActive = this.appService.getUserAvatar();
  }

  setAvatar(avatar: string) {
    this.avatarActive = avatar;
  }

  closeDialog() {
    this.dialogRef.close();
  }

  updateAvatar() {
    this.userService
      .updateAvatar(this.appService.getUserId(), { avatar: this.avatarActive })
      .subscribe((res: any) => {
        if (res && res.avatar) {
          this.appService.currentUser.avatar = res.avatar;
          this.appService.setUserData(this.appService.currentUser);
          this.closeDialog();
          this.uiService.openAlert('Avatar updated !');
        } else {
          this.uiService.openAlert('Error during avatar update');
        }
      });
  }
}
