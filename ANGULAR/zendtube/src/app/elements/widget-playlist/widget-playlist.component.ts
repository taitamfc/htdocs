import { Component, OnInit } from '@angular/core';

import { PlaylistService } from "./../../shared/services/playlist.service";
import { Playlist } from "./../../shared/defines/playlist.class";

@Component({
  selector: '[app-widget-playlist]',
  templateUrl: './widget-playlist.component.html',
})
export class WidgetPlaylistComponent implements OnInit {
  items: Playlist[] = [];
  
  constructor( protected _playlistService: PlaylistService ) { }

  ngOnInit(): void {
    const queryObservable = this._playlistService.getItems().subscribe( 
      ( items:Playlist[] ) => {
        this.items = items;
      }
    );
  }

}
