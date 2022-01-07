import { Component, OnInit } from '@angular/core';

import { VideoService } from "./../../shared/services/video.service";
import { Video } from "./../../shared/defines/video.class";

@Component({
  selector: '[app-widget-featured-videos]',
  templateUrl: './widget-featured-videos.component.html',
})
export class WidgetFeaturedVideosComponent implements OnInit {

  items: Video[] = [];
  constructor( protected _videoService: VideoService ) { }

  ngOnInit(): void {
    const queryObservable = this._videoService.getFeaturedItems().subscribe( 
      ( items:Video[] ) => {
        this.items = items;
      }
    );
  }

}
