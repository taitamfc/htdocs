import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import components
import { FilesComponent }         from './components/files.component';

import { AuthGuard } from '../_helpers/auth.guard';


const routes: Routes = [
	{ path: ''	        , component: FilesComponent , canActivate: [AuthGuard] },	
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilesRoutingModule { }
