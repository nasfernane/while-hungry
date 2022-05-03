import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// utils
import { RecipeTagCategory } from '@prisma/client';

import { environment as devenv } from './../../environments/environment';
import { environment as prodenv } from './../../environments/environment.prod';

const ENDPOINT = devenv.API_URL + '/tags';

@Injectable({
  providedIn: 'root'
})
export class RecipeTagsService {

  constructor(
    private http: HttpClient,
  ) { }

  getRecipeTags() {
    return this.http.get<RecipeTagCategory[]>(ENDPOINT);
  }
}
