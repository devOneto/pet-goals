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
  storage: Storage;
  showErrorMessage: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    this.storage = window.sessionStorage;
  }

  ngOnInit() {
    this.storage.clear()
  }

  loginUser() {
    this.showErrorMessage = false;
    this.authService.authUser(this.login, this.password)
      .toPromise()
      .then(data => {
        let user: any = data;
        if (this.login == user.email && this.password == user.password) {
          this.storage.setItem('authenticated', JSON.stringify(true));
          this.router.navigateByUrl('tabs/feed');
        } else { this.showErrorMessage = true }
      })
      .catch(console.log)
  }

}
