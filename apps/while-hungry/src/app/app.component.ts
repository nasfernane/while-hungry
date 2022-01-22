import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '@wh/api-interfaces';

@Component({
  selector: 'wh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Post>('/api/hello');
  constructor(private http: HttpClient) {}
}
