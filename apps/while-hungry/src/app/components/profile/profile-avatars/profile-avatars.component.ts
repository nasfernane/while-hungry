import { Component } from '@angular/core';
import { AppService } from '@wh/core-utils';

@Component({
  selector: 'wh-profile-avatars',
  templateUrl: './profile-avatars.component.html',
  styleUrls: ['./profile-avatars.component.scss']
})
export class ProfileAvatarsComponent {
  avatarSize = '120px';
  avatarActive: string;

  avatarsFemale: string[] = [
    'avatar1',
    'avatar2',
    'avatar3',
    'avatar4',
  ]

  avatarsMale: string[] = [
    'avatar5',
    'avatar6',
    'avatar7',
    'avatar8',
  ]

  constructor(
    private appService: AppService,
  ) {
    this.avatarActive = this.appService.getUserAvatar();
  }

  setAvatar(avatar: string) {
    this.avatarActive = avatar;
  }
}
