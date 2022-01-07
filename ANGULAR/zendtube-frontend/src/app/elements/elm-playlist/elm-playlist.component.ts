import { Component, OnInit,Input } from '@angular/core';

import { PlaylistService } from "./../../shared/services/playlist.service";
import { Playlist } from "./../../shared/defines/playlist.class";

import { VideoService } from "./../../shared/services/video.service";
import { Video } from "./../../shared/defines/video.class";


@Component({
  selector: 'app-elm-playlist',
  templateUrl: './elm-playlist.component.html',
})
export class ElmPlaylistComponent implements OnInit {
  @Input('playlist') playlist:Playlist;
  @Input('layout') layout:string = 'grid';
  items: Video[] = [];
  constructor( 
    protected _playlistService: PlaylistService, 
    protected _videoService: VideoService 
  ) {}

  ngOnInit(): void {
    //getItemsByPlayListId
    this._videoService.getItemsByPlayListId(this.playlist.id,6).subscribe( 
      ( items:Video[] ) => {
        this.items = items;
      }
    );
    
  }

  changeLayout( event:any ){
    this.layout = event;
  }

}
