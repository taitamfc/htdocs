import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsService } from "./services/ads.service";
import { PlaylistService } from "./services/playlist.service";
import { VideoService } from "./services/video.service";
//import { SafePipe } from './pipes/safe.pipe';



@NgModule({
  declarations: [
    // SafePipe
  ],
  imports: [
    CommonModule
  ],
  providers:[
    AdsService,
    PlaylistService,
    VideoService
  ],
  exports: [
    // SafePipe
  ]
})
export class SharedModule { }
