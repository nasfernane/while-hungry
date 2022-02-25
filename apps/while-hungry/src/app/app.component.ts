import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '@wh/core-data';

@Component({
  selector: 'wh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private appService: AppService,
  ) {}

  ngOnInit() {
    this.appService.loadUserFromLocalStorage();
  }
}
