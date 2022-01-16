import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPage implements OnInit {

  login: string = ``;
  password: string = ``;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginUser() {
    this.authService.authUser(this.login, this.password)
      .toPromise()
      .then(data => {
        console.log(data + this.login + this.password)
        let user: any = data;
        if (this.login == user.email && this.password == user.password) {
          console.log('e igual sim')
          this.router.navigateByUrl('tabs/feed');
        }
      })
  }

}
