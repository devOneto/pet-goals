import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private url: string = environment.url + '/posts';

  constructor(private _http: HttpClient) { }

  getFeed(): Observable<Post[]> {
    return this._http.get<Post[]>(`${this.url}`)
  }

  postFeed(post: Post): Observable<Post[]> {
    console.log(post);

    return this._http.put<Post[]>(`${this.url}/${post.id}`, post);
  }

}
