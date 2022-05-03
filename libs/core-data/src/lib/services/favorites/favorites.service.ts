import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// schema
import { RecipeFavorite } from '@prisma/client';

import { environment as devenv } from './../../environments/environment';
import { environment as prodenv } from './../../environments/environment.prod';

const ENDPOINT = devenv.API_URL + '/favorites'

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  constructor(
    private http: HttpClient,
  ) { }

  all(userId: number) {
    return this.http.get<RecipeFavorite[]>(ENDPOINT + `/${userId}`);
  }

  allWithFilters(userId: number, filters: any) {
    return this.http.post<RecipeFavorite[]>(ENDPOINT + `/${userId}`, filters);
  }

  addOrRemoveFavorite(recipeId: number, userId: number, recipeInFavorites: boolean, favoriteId?: number) {
    if (recipeInFavorites && favoriteId) {
      return this.deleteFavorite(favoriteId)
    } else {
      return this.addFavorite(recipeId, userId)
    }
  }

  addFavorite(recipeId: number, userId: number) {
    return this.http.post<RecipeFavorite>(ENDPOINT, { userId, recipeId });
  }

  deleteFavorite(favoriteId: number) {
    return this.http.delete(ENDPOINT + `/${favoriteId}`)
  }
}
