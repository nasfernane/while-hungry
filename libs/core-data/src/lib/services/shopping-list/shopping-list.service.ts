import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// utils
import { environment } from '../../environments/environment';
import { ShoppingList } from '@prisma/client';

const ENDPOINT = environment.API_URL + '/shopping-list';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor(
    private http: HttpClient,
  ) { }

  create(userId: number, recipeName: string, ingredients: Array<any>) {
    return this.http.post<ShoppingList>(ENDPOINT, {userId: userId, name: recipeName, ingredients})
  }
}
