import { Post } from './../../models/post.model';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FeedService } from 'src/app/services/feed.service';
import { Share } from '@capacitor/share';

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

  sharePost(post: Post) {
    let titlePost: string = post.title;
    let description: string = post.description;
    if (post.event != null) {
      titlePost = post.title + '! No dia ' + post.event.date + ' as ' + post.event.time + '! Responsável: ' + post.event.responsible;
      description = post.description + ' no dia ' + post.event.date + ' as ' + post.event.time + '! Responsável: ' + post.event.responsible;
    }

    Share.share({
      title: titlePost,
      text: description,
      url: post.urlImage,
      dialogTitle: titlePost,
    });

  }

}
