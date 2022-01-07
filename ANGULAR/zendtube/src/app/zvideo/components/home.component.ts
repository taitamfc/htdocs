import { Component, OnInit } from '@angular/core';

import { PlaylistService } from "./../../shared/services/playlist.service";
import { Playlist } from "./../../shared/defines/playlist.class";

@Component({
  selector: 'app-zvideo-home',
  templateUrl: './../templates/home.component.html',
})
export class HomeComponent implements OnInit {
  playlists: Playlist[] = [];
  layouts: any[] = [
    'grid',
    'hdgrid',
    'list',
    'hdlist',
  ];
  constructor( protected _playlistService: PlaylistService ) { }

  ngOnInit(): void {
    const queryObservable = this._playlistService.getItems().subscribe( 
      ( items:Playlist[] ) => {
        this.playlists = items;
      }
    );
  }

}
