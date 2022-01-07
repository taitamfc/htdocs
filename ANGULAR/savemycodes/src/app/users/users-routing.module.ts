import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import components
import { UsersComponent }         from './components/users.component';
import { UsersLoginComponent }    from './components/users-login.component';
import { UsersRegisterComponent } from './components/users-register.component';
import { UsersForgotComponent }   from './components/users-forgot.component';
import { UsersProfileComponent }   from './components/users-profile.component';
import { UsersAccountComponent }   from './components/users-account.component';

import { AuthGuard } from './../_helpers/auth.guard';

const routes: Routes = [
	{ path: ''	        , component: UsersComponent , canActivate: [AuthGuard] },	
	{ path: 'login'	    , component: UsersLoginComponent },	
	{ path: 'register'	, component: UsersRegisterComponent },	
	{ path: 'forgot'	  , component: UsersForgotComponent },	
	{ path: 'profile'	  , component: UsersProfileComponent, canActivate: [AuthGuard] },
	{ path: 'account'	  , component: UsersAccountComponent, canActivate: [AuthGuard] },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
