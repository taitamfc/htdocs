import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable} from 'rxjs';
import { Ads } from "../defines/ads.class";
import { AppSettings } from "../../app.settings";

@Injectable()
export class AdsService {
    constructor(
        protected _db: AngularFireDatabase
    ) { }

    //getItemsByPosition( position:string ): Observable<Ads> {
    getItemsByPosition( position:string ): any {
        const queryObservable = this._db.list(
            AppSettings.TBL_ADS, 
            ref => ref.orderByChild('positon').equalTo(position)
        ).valueChanges();

        return queryObservable;
    }
    
}