import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  storage: Storage;

  constructor(
    private router: Router
  ) {
    this.storage = window.sessionStorage;
  }

  ngOnInit() { }

  exit() {
    this.storage.clear();
    this.router.navigateByUrl('')
  }

}
