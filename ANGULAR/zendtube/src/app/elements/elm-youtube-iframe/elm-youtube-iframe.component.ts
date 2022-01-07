import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-elm-youtube-iframe',
  templateUrl: './elm-youtube-iframe.component.html',
})
export class ElmYoutubeIframeComponent implements OnInit {
  @Input() videoId:string = '';
  width:number  = 560;
  height:number = 315;
  constructor() { }

  ngOnInit(): void {
    //console.log(this.videoId);
  }

}
