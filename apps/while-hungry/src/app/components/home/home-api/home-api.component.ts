import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wh-home-api',
  templateUrl: './home-api.component.html',
  styleUrls: ['./home-api.component.scss'],
})
export class HomeApiComponent implements OnInit {
  ngOnInit(): void {
    console.log('home api component');
  }
}
