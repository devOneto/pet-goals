import { Post } from './../../models/post.model';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FeedService } from 'src/app/services/feed.service';
import { Share } from '@capacitor/share';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  posts: Post[] = [];
  showModalFirstAcess: boolean = false;

  constructor(
    private feedService: FeedService,
    public alertController: AlertController,
    private profileService: ProfileService,
    private router: Router
  ) { }

  ngOnInit() {
    this.feedService.getFeed()
      .toPromise()
      .then(data => { this.posts = data })

    this.profileService.getProfile()
      .toPromise()
      .then(data => { this.showModalFirstAcess = data.isFirstLogin });

    this.profileService.updateFirstLoginStatus()
  }

  incrementLike(post: Post) {
    if (!post.actions.like) {
      post.likes++;
      post.actions.like = true;

      const foundIndex = this.posts.findIndex(x => x.id === post.id);
      this.posts[foundIndex] = post;

      this.feedService.postFeed(post)
        .toPromise()
        .then(data => { this.posts = data })

      this.changeLocation();
    }
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

  changeLocation(): void {

    // save current route first
    const currentRoute = this.router.url;

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentRoute]); // navigate to same route
    });
  }

  closeCardFirstAccess() {
    this.showModalFirstAcess = false;
    this.profileService.updateFirstLoginStatus()
  }

}
