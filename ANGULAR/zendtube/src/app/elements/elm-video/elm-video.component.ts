import { Component, Input, OnInit } from '@angular/core';
import { Video } from "./../../shared/defines/video.class";

@Component({
  selector: '[app-elm-video]',
  templateUrl: './elm-video.component.html',
})
export class ElmVideoComponent implements OnInit {
  @Input('showDesc') showDesc:boolean = false;
  @Input('item') item:Video;
  constructor() { }

  ngOnInit(): void {
    //console.log(this.item);
  }

}
