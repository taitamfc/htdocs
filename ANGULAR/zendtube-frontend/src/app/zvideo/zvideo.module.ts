import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsModule } from './../elements/elements.module';

import { HomeComponent } from './components/home.component';
import { VideosComponent } from './components/videos.component';
import { VideoComponent } from './components/video.component';
import { PlaylistComponent } from './components/playlist.component';
import { PlaylistsComponent } from './components/playlists.component';

import { ZVideoRoutingModule } from "./zvideo-routing.module";

@NgModule({
  declarations: [
    HomeComponent,
    VideosComponent,
    VideoComponent,
    PlaylistComponent,
    PlaylistsComponent
  ],
  imports: [
    CommonModule,
    ElementsModule,
    ZVideoRoutingModule
  ]
})
export class ZVideoModule { }
