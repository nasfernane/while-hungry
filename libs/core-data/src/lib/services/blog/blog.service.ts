import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Post } from '@prisma/client';

const ENDPOINT = environment.API_URL + '/posts'

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(
    public http: HttpClient,
  ) { }

  all() {
    return this.http.get<Post[]>(ENDPOINT);
  }

  find(id: string) {
    return this.http.get<Post>(ENDPOINT + `/${id}`);
  }

  create(post: Post) {
    return this.http.post(ENDPOINT, post);
  }

  update(post: Post) {
    return this.http.put(ENDPOINT + `/${post.id}`, post)
  }

  delete(post: Post) {
    return this.http.delete(ENDPOINT + `/${post.id}`);
  }
}
