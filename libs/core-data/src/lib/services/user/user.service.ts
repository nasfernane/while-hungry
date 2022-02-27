import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Clap } from '@prisma/client';

const ENDPOINT = environment.API_URL + '/claps';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public http: HttpClient,
  ) { }

  all() {
    return this.http.get<Clap[]>(ENDPOINT);
  }

  find(id: string) {
    return this.http.get<Clap>(ENDPOINT + `/${id}`);
  }

  create(clap: Clap) {
    return this.http.post(ENDPOINT, clap);
  }

  // checkIfClapped(userClappingId: string, userClappedId: string,) {
  //   return this.http.post(ENDPOINT, )
  // }
}
