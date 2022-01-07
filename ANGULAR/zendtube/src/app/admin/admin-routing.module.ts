import { NgModule } from '@angular/core';
import { Router, RouterModule,Routes } from '@angular/router';
import { TrainningComponent } from './components/trainning.component';
const defineRouter: Routes = [
  { path: 'trainning' , component: TrainningComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( defineRouter )
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
