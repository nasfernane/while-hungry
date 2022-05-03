import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '@prisma/client';
import { Clap } from '@prisma/client';

import { environment as devenv } from './../../environments/environment';
import { environment as prodenv } from './../../environments/environment.prod';

const ENDPOINT = devenv.API_URL + '/users';
const CLAP_ENDPOINT = devenv.API_URL + '/claps';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public http: HttpClient,
  ) { }

  all() {
    return this.http.get<User[]>(ENDPOINT);
  }

  find(id: string) {
    return this.http.get<User>(ENDPOINT + `/${id}`);
  }

  create(user: User) {
    return this.http.post(ENDPOINT, user);
  }

  update(id: number, user: object) {
    return this.http.patch<User>(ENDPOINT + `/${id}`, user);
  }

  clapUser(clapperId: number, clappedId: number) {
    return this.http.post<Clap>(
      CLAP_ENDPOINT, 
      { clapperId, clappedId }
    )
  }

  checkIfClapped(clapperId: number, clappedId: number) {
    return this.http.post<boolean>(
      CLAP_ENDPOINT + '/check', 
      { clapperId, clappedId }
    )
  }

  getUserClapsCount(userId: number) {
    return this.http.get<number>(
      CLAP_ENDPOINT + '/count/' + userId
    )
  }

  updateAvatar(id: number, avatar: object) {
    return this.http.post<string>(
      ENDPOINT + `/${id}/avatar/`, avatar
    )
  }

}
