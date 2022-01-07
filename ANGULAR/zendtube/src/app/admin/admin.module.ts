import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainningComponent } from './components/trainning.component';

import { AdminRoutingModule } from "./admin-routing.module";



@NgModule({
  declarations: [
    TrainningComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
