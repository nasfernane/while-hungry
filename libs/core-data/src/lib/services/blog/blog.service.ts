import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// schema
import { Post } from '@prisma/client';

import { environment } from '@wh/environments';
const ENDPOINT = environment.API_URL + '/posts';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(public http: HttpClient) {}

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
    return this.http.put(ENDPOINT + `/${post.id}`, post);
  }

  delete(post: Post) {
    return this.http.delete(ENDPOINT + `/${post.id}`);
  }

  findLast() {
    return this.http.get<Post>(ENDPOINT + `/last`);
  }
}
