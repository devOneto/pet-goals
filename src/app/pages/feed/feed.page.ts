import { Post } from './../../models/post.model';
import { Component, OnInit } from '@angular/core';
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
    private feedService: FeedService
  ) { }

  ngOnInit() {
    this.feedService.getFeed()
      .toPromise()
      .then(data => { this.posts = data })
  }

  sharePost(post: Post) {
    Share.share({
      title: post.title,
      text: post.description,
      url: post.urlImage,
      dialogTitle: 'Compartilhar um post do Pet Goals!',
    });
  }

}
