import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// utils
import { environment } from '../../environments/environment';

import { RecipeTag } from '@prisma/client';

const ENDPOINT = environment.API_URL + '/tags';

@Injectable({
  providedIn: 'root'
})
export class RecipeTagsService {

  constructor(
    private http: HttpClient,
  ) { }

  getRecipeTags() {
    return this.http.get<RecipeTag[]>(ENDPOINT);
  }
}
