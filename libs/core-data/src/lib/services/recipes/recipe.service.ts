import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Recipe } from '@prisma/client';

const ENDPOINT = environment.API_URL + '/recipes'

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(
    public http: HttpClient,
  ) { }

  all() {
    return this.http.get<Recipe[]>(ENDPOINT);
  }

  find(id: string) {
    return this.http.get<Recipe>(ENDPOINT + `/${id}`);
  }

  create(recipe: Recipe) {
    return this.http.post(ENDPOINT, recipe);
  }

  update(recipe: Recipe) {
    return this.http.put(ENDPOINT + `/${recipe.id}`, recipe);
  }

  delete(recipe: Recipe) {
    return this.http.delete(ENDPOINT + `/${recipe.id}`);
  }

  addOrRemoveFavorite(recipeId: number, userId: number, add: boolean) {
    return this.http.post(ENDPOINT + `/favorite/${add ? 'add' : 'remove'}`, { recipeId: recipeId, userId: userId })
  }

  getAuthorRecipeCount(userId: number) {
    return this.http.get(ENDPOINT + `/authorcount/${userId}`);
  }
}
