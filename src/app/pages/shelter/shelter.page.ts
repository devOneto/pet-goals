import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/app/models/profile.model';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-shelter',
  templateUrl: './shelter.page.html',
  styleUrls: ['./shelter.page.scss'],
})
export class ShelterPage implements OnInit {

  storage: Storage;
  isPosting = false;

  constructor(private router: Router) {
    this.storage = window.sessionStorage;
  }

  ngOnInit() {
  }

  createNewPost() {
    this.isPosting = true;
  }

  closeNewPost() {
    this.isPosting = false;
  }

  showNewPostButton() {
    return this.storage.getItem('userType') == '"shelter"';
  }

  exit() {
    this.storage.clear();
    this.router.navigateByUrl('')
  }

}
