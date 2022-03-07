import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

// schema
import { Recipe, RecipeFavorite } from '@prisma/client';


// endpoint
const ENDPOINT = environment.API_URL + '/favorites'

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
}
