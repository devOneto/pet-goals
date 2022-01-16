import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPage implements OnInit {

  newUserEmail: string;
  newUserPassword: string;

  constructor(private _authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  newUser() {
    this._authService.newAccount(this.newUserEmail, this.newUserPassword)
      .toPromise()
      .then(x => {
        console.log(`cadastrou`)
        this.router.navigate(['']);
      })
  }

}
