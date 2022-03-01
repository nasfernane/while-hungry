import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// utils
import { environment } from '../../environments/environment';

// schemas
import { Recipe, RecipeReview } from '@prisma/client';


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

  checkIfReviewed(recipeId: number, userId: number) {
    return this.http.get<RecipeReview>(ENDPOINT + `/check/${recipeId}/${userId}`)
  }
}
