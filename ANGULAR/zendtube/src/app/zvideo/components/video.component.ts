import { Component, OnDestroy, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { VideoService } from "./../../shared/services/video.service";
import { Video } from "./../../shared/defines/video.class";

import { PlaylistService } from "./../../shared/services/playlist.service";
import { Playlist } from "./../../shared/defines/playlist.class";

@Component({
  selector: 'app-zvideo-video',
  templateUrl: './../templates/video.component.html',
})
export class VideoComponent implements OnInit, OnDestroy {
  videoID:string;
  item:Video = null;
  playlist:Playlist = null;
  layoutDefault:string = 'grid';
  subscribtion;
  constructor(
    protected _activatedRoute: ActivatedRoute,
    protected _videoService: VideoService,
    protected _playlistService: PlaylistService, 
  ) { }

  ngOnInit(): void {

    //this.videoID = this._activatedRoute.snapshot.params.id;


   
    this.subscribtion = this._activatedRoute.params.subscribe(params => {
      this.videoID = params.id;
      this._videoService.getItem(this.videoID).subscribe( 
        ( items:Video[] ) => {
          this.item = items[0];
  
          this._playlistService.getItem(this.item.playlistID).subscribe( 
            ( items:Playlist[] ) => {
              this.playlist = items[0];
            }
          );
  
        }
      );
    });

  }

  ngOnDestroy(){
    this.subscribtion.unsubscribe();
  }
}
