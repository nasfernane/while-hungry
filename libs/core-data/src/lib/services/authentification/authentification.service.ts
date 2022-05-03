import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '@prisma/client';
import { environment as devenv } from './../../environments/environment';
import { environment as prodenv } from './../../environments/environment.prod';

const ENDPOINT = devenv.API_URL + '/auth'

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
