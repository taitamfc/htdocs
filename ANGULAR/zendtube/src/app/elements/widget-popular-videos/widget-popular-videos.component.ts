import { Component, OnInit } from '@angular/core';


import { VideoService } from "./../../shared/services/video.service";
import { Video } from "./../../shared/defines/video.class";

@Component({
  selector: '[app-widget-popular-videos]',
  templateUrl: './widget-popular-videos.component.html',
})
export class WidgetPopularVideosComponent implements OnInit {

  items: Video[] = [];
  constructor( protected _videoService: VideoService ) { }

  ngOnInit(): void {
    const queryObservable = this._videoService.getPopularItems().subscribe( 
      ( items:Video[] ) => {
        this.items = items;
      }
    );
  }
}
