import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

// schema
import { User } from '@prisma/client';

// services
import { AppService } from '@wh/core-utils';
import { ProfileAvatarsComponent } from './profile-avatars/profile-avatars.component';

@Component({
  selector: 'wh-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  avatar: string;

  constructor(
    public appService: AppService,
    private matDialog: MatDialog,
  ) {
    this.avatar = this.appService.getUserAvatar();
   }

  clickAvatar() {
    this.matDialog.open(ProfileAvatarsComponent)
  }

}
