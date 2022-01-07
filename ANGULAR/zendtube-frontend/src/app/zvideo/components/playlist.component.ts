import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { VideoService } from "./../../shared/services/video.service";
import { Video } from "./../../shared/defines/video.class";

@Component({
  selector: 'app-zvideo-playlist',
  templateUrl: './../templates/playlist.component.html',
})
export class PlaylistComponent implements OnInit {
  videoID:string;
  item:Video = null;
  constructor(
    protected _activatedRoute: ActivatedRoute,
    protected _videoService: VideoService,
  ) { }

  ngOnInit(): void {
    // this._activatedRoute.params.subscribe(parameter => {
    //   console.log(parameter.id);
    // });

    this.videoID = this._activatedRoute.snapshot.params.id;
    const queryObservable = this._videoService.getItem(this.videoID).subscribe( 
      ( items:Video[] ) => {
        this.item = items[0];

        console.log(items);
      }
    );
    
  }

}
