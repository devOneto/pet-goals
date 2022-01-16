import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  url: string = `${environment.url}/singUp`

  authUser(email: string, password: string) {
    return this._http.get(`${this.url}`)
  }

  newAccount(email: string, password: string) {
    let body = {
      email: email,
      password: password
    }
    return this._http.post(`${this.url}`, body);
  }

}
