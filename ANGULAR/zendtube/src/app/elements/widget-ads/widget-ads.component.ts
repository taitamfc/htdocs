import { Component, OnInit, Input } from '@angular/core';


import { AdsService } from "./../../shared/services/ads.service";
import { Ads } from "./../../shared/defines/ads.class";

@Component({
  selector: '[app-widget-ads]',
  templateUrl: './widget-ads.component.html',
})
export class WidgetAdsComponent implements OnInit {
  @Input('app-widget-ads') position :string;

  item: Ads;

  constructor(protected _adsService: AdsService) { }
  ngOnInit(): void {


    //this._db.list('/ads', (ref) => ref.orderByChild('size').equalTo('large'));
    // const queryObservable = this._db.list('ads',function(ref){
    //   return ref.orderByChild('positon').equalTo('banner');
    // }).valueChanges();

    const queryObservable = this._adsService.getItemsByPosition(this.position).subscribe( 
      ( items:Ads[] ) => {
        this.item = items[0];
      }
    );
  }

}
