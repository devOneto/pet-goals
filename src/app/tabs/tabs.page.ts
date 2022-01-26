import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  closed$ = new Subject<any>();
  storage: Storage;

  tabs = [
    { name: "Ranking", route: "ranking", iconPath: "../../assets/icon/ranking.svg" },
    { name: "Home", route: "feed", iconPath: "../../assets/icon/home.svg" },
    { name: "Perfil", route: "profile", iconPath: "../../assets/icon/profile.svg" }
  ];

  constructor(private _router: Router) {
    this.storage = window.sessionStorage;
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.closed$.next(); // <-- close subscription when component is destroyed
  }

  showTab() {
    return (this.storage.getItem('authenticated') == 'true' && this.storage.getItem('userType') == '"common"')
  }

}
