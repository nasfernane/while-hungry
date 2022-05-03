import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// libs
import { environment } from '@wh/environments';

// schemas
import { RecipeComment } from '@prisma/client';

const ENDPOINT = environment.API_URL + '/recipes-comments';

@Injectable({
  providedIn: 'root',
})
export class RecipeCommentService {
  constructor(private http: HttpClient) {}

  create(comment: any) {
    return this.http.post<RecipeComment>(ENDPOINT, comment);
  }
}
