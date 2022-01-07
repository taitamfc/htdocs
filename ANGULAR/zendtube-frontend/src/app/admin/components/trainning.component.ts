import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

import { dbAds } from ".//../../../environments/db-ads";
import { dbPlaylist } from ".//../../../environments/db-playlist";

@Component({
  selector: 'app-admin-trainning',
  templateUrl: './../templates/trainning.component.html',
})
export class TrainningComponent {
  items: Observable<any[]>;
  item: Observable<any>;
  constructor(protected _db: AngularFireDatabase) {
    
  }

  onPushDataAds(){

    const itemsRef = this._db.list('ads');
    dbAds.forEach( function(ad,value){
      itemsRef.push(ad);
    });
  }
  onPushDataPlaylist(){

    const itemsRef = this._db.list('playlist');
    dbPlaylist.forEach( function( playlist ){
      delete playlist.items;
      console.log(playlist);
      itemsRef.push(playlist);
    });
  }
  onPushDataVideos(){

    const itemsRef = this._db.list('videos');
    dbPlaylist.forEach( function( playlist ){
      playlist.items.forEach( function( video ){
        itemsRef.push(video);
      });
  });
  }
}
