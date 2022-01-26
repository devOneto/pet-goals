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
  showSuccessMessage: boolean;
  newUserName: string;
  storage: Storage;

  constructor(private _authService: AuthService, private router: Router) {
    this.storage = window.sessionStorage;
  }

  ngOnInit() {
    this.storage.clear()
  }

  newUser() {
    this._authService.newAccount(this.newUserEmail, this.newUserPassword, this.newUserName)
      .toPromise()
      .then(x => {
        this.showSuccessMessage = true;
        // this.router.navigate(['']);
      })
  }

}
