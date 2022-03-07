import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// utils
import { environment } from '../../environments/environment';

import { Definition } from '@prisma/client';


const ENDPOINT = environment.API_URL + '/definitions';

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
