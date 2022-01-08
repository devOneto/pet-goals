import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedPage } from './feed.page';
import { FollowingComponent } from './sub-pages/following/following.component';
import { GeralComponent } from './sub-pages/geral/geral.component';

const routes: Routes = [
  {
    path: '',
    component: FeedPage,
    children: [
      { path: '/geral', component: GeralComponent },
      { path: '/seguindo', component: FollowingComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedPageRoutingModule { }
