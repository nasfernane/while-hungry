import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '@prisma/client';
import { environment as devenv } from './../../environments/environment';
import { environment as prodenv } from './../../environments/environment.prod';

const ENDPOINT = devenv.API_URL + '/recipes';

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
    return this.http.post(ENDPOINT, recipe );
  }

  storePicture(picture: FormData) {
    return this.http.post(ENDPOINT + '/picture', picture );
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
    console.log('process.env');
    console.log(process.env);
    return this.http.get<Recipe>(ENDPOINT + `/last`);
  }

}
