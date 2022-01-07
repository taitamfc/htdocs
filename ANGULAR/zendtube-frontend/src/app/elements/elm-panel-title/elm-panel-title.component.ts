import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: '[app-elm-panel-title]',
  templateUrl: './elm-panel-title.component.html',
})
export class ElmPanelTitleComponent implements OnInit {
  @Input('title') title:string;
  @Input('layout') layout:string;
  @Output('myLayout') myLayout = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  setActive( layout:string ){
    return {
      active : ( layout == this.layout )
    }
  }

  setLayout( layout:string ){
    this.layout = layout;
    this.myLayout.emit(layout);

    return false;
  }

}
