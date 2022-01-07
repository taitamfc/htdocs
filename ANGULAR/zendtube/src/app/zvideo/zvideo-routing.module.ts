import { NgModule } from '@angular/core';
import { Router, RouterModule,Routes } from '@angular/router';

import { HomeComponent } from './components/home.component';
import { VideosComponent } from './components/videos.component';
import { VideoComponent } from './components/video.component';
import { PlaylistComponent } from './components/playlist.component';
import { PlaylistsComponent } from './components/playlists.component';

const defineRouter: Routes = [
  { path:'', component: HomeComponent },
  { path:'videos', component: VideosComponent },
  { path:'playlists', component: PlaylistsComponent },
  {
    path: 'playlist',
    children: [
      {
        path: '', 
        component: PlaylistsComponent
      },
      {
        path: ':id', 
        component: PlaylistComponent
      }
    ]
  },
  {
    path: 'video',
    children: [
      {
        path: '', 
        component: VideosComponent
      },
      {
        path: ':id', 
        component: VideoComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( defineRouter )
  ],
  exports: [
    RouterModule
  ]
})
export class ZVideoRoutingModule { }
