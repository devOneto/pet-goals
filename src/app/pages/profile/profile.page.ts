import { ProfileService } from './../../services/profile.service';
import { Profile } from './../../models/profile.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profile: Profile = null;

  constructor(private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.profileService.getProfile().toPromise()
      .then(data => { console.log(data); this.profile = data });
  }

}
