import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wh-home-chat',
  templateUrl: './home-chat.component.html',
  styleUrls: ['./home-chat.component.scss']
})
export class HomeChatComponent implements OnInit {

  ngOnInit(): void {
    console.log('home chat component');
  }

}
