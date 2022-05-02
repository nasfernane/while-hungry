import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// utils
import { environment } from '@wh/env';
import { ShoppingList } from '@prisma/client';

const ENDPOINT = environment.API_URL + '/shopping-list';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor(
    private http: HttpClient,
  ) { }

  /* A function that creates a new shopping list. */
  create(userId: number, recipeId: number, ingredients: Array<any>) {
    return this.http.post<ShoppingList>(ENDPOINT, {userId: userId, recipeId: recipeId, ingredients})
  }

  /**
   * It returns an Observable of ShoppingList.
   * @param {number} id - number
   * @returns An Observable of type ShoppingList
   */
  findAll(id: number) {
    return this.http.get<ShoppingList>(ENDPOINT+ `/${id}`)
  }

  removeAll(id: number) {
    return this.http.delete<ShoppingList>(ENDPOINT+ `/all/${id}`)
  }

  remove(id: string) {
    return this.http.delete<ShoppingList>(ENDPOINT+ `/${id}`)
  }
}
