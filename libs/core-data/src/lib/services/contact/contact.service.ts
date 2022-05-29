import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@wh/env';
const ENDPOINT = environment.API_URL + '/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: HttpClient) {}

  sendMessage(body: any) {
    return this.http.post(ENDPOINT, body)
  }
}
