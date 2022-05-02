import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@wh/env';

import { User } from '@prisma/client';


const ENDPOINT = environment.API_URL + '/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(
    public http: HttpClient,
  ) { }

  public login(email: string, password: string) {
    return this.http.post(ENDPOINT + '/login', { email: email, password: password });
  }

  public register(email: string, nickname: string, password: string, passwordConfirm: string) {
    return this.http.post(ENDPOINT + '/register', { email: email, nickname: nickname, password: password, passwordConfirm: passwordConfirm });
  }

  public updatePassword(id: number, passwords: object) {
    return this.http.post<User>(ENDPOINT + `/pwupdate/${id}`, passwords);
  }
}
