import { Component, OnInit } from '@angular/core';
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
    private feedService: FeedService
  ) { }

  ngOnInit() {
    this.feedService.getFeed()
      .toPromise()
      .then(data => { this.posts = data })
  }

}
