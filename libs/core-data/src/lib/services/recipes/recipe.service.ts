import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '@prisma/client';

import { environment } from '@wh/env';

import { RecipeFull } from '../../types';
const ENDPOINT = environment.API_URL + '/recipes';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(public http: HttpClient) {}

  all() {
    return this.http.get<RecipeFull[]>(ENDPOINT);
  }

  allWithFilters(filters: object) {
    return this.http.post<RecipeFull[]>(ENDPOINT + '/filters', filters);
  }

  allWithName(name: string) {
    return this.http.get<RecipeFull[]>(ENDPOINT + '/name/' + name);
  }

  find(id: string) {
    return this.http.get<RecipeFull>(ENDPOINT + `/${id}`);
  }

  create(recipe: Record<string, unknown>) {
    return this.http.post(ENDPOINT, recipe);
  }

  update(recipe: Record<string, unknown>, recipeId: number) {
    return this.http.put(ENDPOINT + `/${recipeId}`, recipe);
  }

  storePicture(picture: FormData) {
    return this.http.post(ENDPOINT + '/picture', picture);
  }

  delete(recipe: Recipe) {
    return this.http.delete(ENDPOINT + `/${recipe.id}`);
  }

  getAuthorRecipeCount(userId: number) {
    return this.http.get<number>(ENDPOINT + `/authorcount/${userId}`);
  }

  findLast() {
    return this.http.get<Recipe>(ENDPOINT + `/last`);
  }
}
