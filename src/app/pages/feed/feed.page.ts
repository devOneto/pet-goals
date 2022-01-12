import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Post } from 'src/app/models/post.model';
import { FeedService } from 'src/app/services/feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  posts: Post[] = [];

  constructor(
    private feedService: FeedService,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.feedService.getFeed()
      .toPromise()
      .then(data => { this.posts = data })
  }

  incrementLike(post) {
    post.likes++;
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Aviso',
      message: 'Funcionalidade a ser implementada.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
