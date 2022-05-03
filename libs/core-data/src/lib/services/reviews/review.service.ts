import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


// schemas
import { RecipeReview } from '@prisma/client';

import { environment } from '@wh/environments';
const ENDPOINT = environment.API_URL + '/reviews';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(
    private http: HttpClient,
  ) { }

  find(id: string) {
    return this.http.get<RecipeReview>(ENDPOINT + `/${id}`);
  }

  create(review: any) {
    return this.http.post<RecipeReview>(ENDPOINT, review);
  }

  update(reviewId: number, review: any) {
    return this.http.patch<RecipeReview>(ENDPOINT + `/${reviewId}`, review);
  }

  checkIfReviewed(recipeId: number, userId: number) {
    return this.http.get<RecipeReview>(ENDPOINT + `/check/${recipeId}/${userId}`)
  }
}
