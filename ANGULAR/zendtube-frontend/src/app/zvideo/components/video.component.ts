import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { VideoService } from "./../../shared/services/video.service";
import { Video } from "./../../shared/defines/video.class";

import { PlaylistService } from "./../../shared/services/playlist.service";
import { Playlist } from "./../../shared/defines/playlist.class";

@Component({
  selector: 'app-zvideo-video',
  templateUrl: './../templates/video.component.html',
})
export class VideoComponent implements OnInit {
  videoID:string;
  item:Video = null;
  playlist:Playlist = null;
  constructor(
    protected _activatedRoute: ActivatedRoute,
    protected _videoService: VideoService,
    protected _playlistService: PlaylistService, 
  ) { }

  ngOnInit(): void {
    // this._activatedRoute.params.subscribe(parameter => {
    //   console.log(parameter.id);
    // });

    this.videoID = this._activatedRoute.snapshot.params.id;
    this._videoService.getItem(this.videoID).subscribe( 
      ( items:Video[] ) => {
        this.item = items[0];

        console.log(this.item);

        this._playlistService.getItem(this.item.playlistID).subscribe( 
          ( items:Playlist[] ) => {
            this.playlist = items[0];

            console.log(this.playlist);
          }
        );

      }
    );
    
  }

}
