import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable} from 'rxjs';
import { Video } from "../defines/video.class";
import { AppSettings } from "../../app.settings";

@Injectable()
export class VideoService {
    constructor(
        protected _db: AngularFireDatabase
    ) { }

    getItems(){
        const queryObservable = this._db.list(
            AppSettings.TBL_VIDEO, 
            //ref => ref.orderByChild('positon').equalTo(position)
        ).valueChanges();

        return queryObservable;
    }
    getItem( videoID:string ){
        const queryObservable = this._db.list(
            AppSettings.TBL_VIDEO, 
            ref => ref.orderByChild('id').equalTo(videoID)
        ).valueChanges();

        return queryObservable;
    }
    getFeaturedItems(){
        const queryObservable = this._db.list(
            AppSettings.TBL_VIDEO, 
            ref => ref.orderByChild('views').equalTo(1).limitToFirst(4)
        ).valueChanges();

        return queryObservable;
    }
    getPopularItems(){
        const queryObservable = this._db.list(
            AppSettings.TBL_VIDEO, 
            ref => ref.orderByChild('views').equalTo(1).limitToLast(3)
        ).valueChanges();

        return queryObservable;
    }
    getItemsByPlayListId( playListId:string , limit:number = 4){
        const queryObservable = this._db.list(
            AppSettings.TBL_VIDEO, 
            ref => ref.orderByChild('playlistID').equalTo(playListId).limitToFirst(limit)
        ).valueChanges();

        return queryObservable;
    }
    
}