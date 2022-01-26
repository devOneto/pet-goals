import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  url: string = `${environment.url}/profile`

  authUser(email: string, password: string) {
    return this._http.get(`${this.url}`)
  }

  newAccount(email: string, password: string, name: string) {

    let firstBadge = { name: 'Rookie', description: 'Seu primeiro prêmio. Por fazer parte da família PetGoals! Obrigado!', image: 'rookie' }

    let body = {
      name: name,
      email: email,
      password: password,
      urlImage: "",
      points: 0,
      events: [],
      badges: [firstBadge],
      isFirstLogin: true
    }
    return this._http.post(`${this.url}`, body);
  }

}
