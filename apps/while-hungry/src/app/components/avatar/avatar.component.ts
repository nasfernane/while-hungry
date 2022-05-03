import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wh-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  @Input() avatar: string;
  @Input() avatarSize: string;
  @Input() edit = false;
  editSize: string;

  ngOnInit() {
    this.editSize =
      +this.avatarSize.substring(0, this.avatarSize.length - 3) / 3 + 'rem';
  }
}
