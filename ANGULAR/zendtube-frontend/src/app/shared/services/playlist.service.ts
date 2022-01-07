import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable} from 'rxjs';
import { Playlist } from "./../defines/playlist.class";
import { AppSettings } from "../../app.settings";

@Injectable()
export class PlaylistService {
    constructor(
        protected _db: AngularFireDatabase
    ) { }

    getItems(){
        const queryObservable = this._db.list(
            AppSettings.TBL_PLAYLIST, 
            //ref => ref.orderByChild('positon').equalTo(position)
        ).valueChanges();

        return queryObservable;
    }
    getItem( playlistID : string ){
        const queryObservable = this._db.list(
            AppSettings.TBL_PLAYLIST, 
            ref => ref.orderByChild('id').equalTo(playlistID)
        ).valueChanges();

        return queryObservable;
    }

    
    
}