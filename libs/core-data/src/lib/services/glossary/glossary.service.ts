import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Definition } from '@prisma/client';

import { environment as devenv } from './../../environments/environment';
import { environment as prodenv } from './../../environments/environment.prod';

const ENDPOINT = devenv.API_URL + '/definitions';

@Injectable({
  providedIn: 'root'
})
export class GlossaryService {

  constructor(
    private http: HttpClient,
  ) { }

  getGlossary() {
    return this.http.get<Definition[]>(ENDPOINT);
  }
}
