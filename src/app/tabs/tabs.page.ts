import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor() { }

  tabs = [
    { name: "Ranking", route: "ranking", iconPath: "../../assets/icon/ranking.svg" },
    { name: "Home", route: "feed", iconPath: "../../assets/icon/home.svg" },
    { name: "Perfil", route: "profile", iconPath: "../../assets/icon/profile.svg" }
  ];

}
