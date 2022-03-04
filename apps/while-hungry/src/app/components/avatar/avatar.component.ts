import { Component, Input } from '@angular/core';

@Component({
  selector: 'wh-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  @Input() avatar: string;
  @Input() avatarSize: string;
}
