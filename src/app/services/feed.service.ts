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

}
