import { Component, OnInit } from '@angular/core';
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
export class ProfileComponent implements OnInit {
  avatar: string;

  constructor(
    public appService: AppService,
    private matDialog: MatDialog,
  ) {
    this.avatar = this.appService.getUserAvatar();
   }

  ngOnInit(): void {
    console.log('coucou');
    // this.user.avatar = 'avatar7';
  }

  clickAvatar() {
    this.matDialog.open(ProfileAvatarsComponent)
  }

}
