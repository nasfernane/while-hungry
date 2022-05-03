import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// utils

// schemas
import { RecipeComment } from '@prisma/client';

import { environment as devenv } from './../../environments/environment';
import { environment as prodenv } from './../../environments/environment.prod';

const ENDPOINT = devenv.API_URL + '/recipes-comments';

@Injectable({
  providedIn: 'root'
})
export class RecipeCommentService {

  constructor(
    private http: HttpClient,
  ) { }

  create(comment: any) {
    return this.http.post<RecipeComment>(ENDPOINT, comment)
  }
}
