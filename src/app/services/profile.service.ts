import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profile } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private url: string = environment.url + '/profile';

  constructor(private _http: HttpClient) { }

  getProfile(): Observable<Profile> {
    return this._http.get<Profile>(`${this.url}`);
  }

  updateFirstLoginStatus() {
    console.log(`a`)
    return this._http.get(`${this.url}`)
      .toPromise()
      .then(data => {
        let body: any = data;
        body.isFirstLogin = false;
        this._http.post(`${this.url}`, body).toPromise().then(console.log)
      })
  }

}
