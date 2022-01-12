import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RankingUser } from '../models/rankingUser.model';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  private url: string = environment.url + '/ranking';

  constructor(private http: HttpClient) { }

  getRanking(): Observable<any> {
    return this.http.get<any>(`${this.url}`);
  }
}
