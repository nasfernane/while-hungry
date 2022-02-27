import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { User } from '@prisma/client';
import { Clap } from '@prisma/client';

const ENDPOINT = environment.API_URL + '/users';
const CLAP_ENDPOINT = environment.API_URL + '/claps';

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

  clapUser(clapperId: number, clappedId: number) {
    return this.http.post<Clap>(
      CLAP_ENDPOINT, 
      { clapperId, clappedId }
    )
  }

  checkIfClapped(clapperId: number, clappedId: number) {
    return this.http.post<Clap>(
      CLAP_ENDPOINT + '/check', 
      { clapperId, clappedId }
    )
  }
}
