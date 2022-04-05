import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Recipe } from '@prisma/client';

const ENDPOINT = environment.API_URL + '/recipes';

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

  allWithFilters(filters: object) {
    return this.http.post<Recipe[]>(ENDPOINT + '/filters', filters);
  }

  allWithName(name: string) {
    return this.http.get<Recipe[]>(ENDPOINT + '/name/' + name);
  }

  find(id: string) {
    return this.http.get<Recipe>(ENDPOINT + `/${id}`);
  }

  create(recipe: Record<string, unknown>) {
    return this.http.post(ENDPOINT, recipe);
  }

  update(recipe: Recipe) {
    return this.http.put(ENDPOINT + `/${recipe.id}`, recipe);
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
