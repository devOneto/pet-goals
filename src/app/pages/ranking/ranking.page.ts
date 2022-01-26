import { Component, OnInit } from '@angular/core';
import { RankingUser } from 'src/app/models/rankingUser.model';
import { RankingService } from 'src/app/services/ranking.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss'],
})
export class RankingPage implements OnInit {

  ranking: RankingUser[] = [];

  constructor(private rankingService: RankingService) { }

  ngOnInit() {
    this.loadData();
  }

  async loadData(): Promise<void> {
    setTimeout(() => {
      setTimeout(() => {
        this.rankingService.getRanking().toPromise()
        .then(data => {
          this.ranking = data.users ;
      }).catch(console.log);
      }, 2000);
    });
  }

}
