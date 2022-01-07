import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { FormsModule }            from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { CodemirrorModule } from '@ctrl/ngx-codemirror';

import { UsersRoutingModule }     from './users-routing.module';
import { UserService }            from './services/user.service';

import { UsersComponent }         from './components/users.component';
import { UsersLoginComponent }    from './components/users-login.component';
import { UsersRegisterComponent } from './components/users-register.component';
import { UsersForgotComponent }   from './components/users-forgot.component';
import { UsersProfileComponent }   from './components/users-profile.component';
import { UsersAccountComponent }   from './components/users-account.component';

import { ElementsModule }  from './../elements/elements.module';
import { HighlightDirective } from './../_directives/highlight.directive';

@NgModule({
  declarations: [
    UsersComponent,
    UsersLoginComponent,
    UsersRegisterComponent,
    UsersForgotComponent,
    UsersProfileComponent,
    UsersAccountComponent,
    HighlightDirective 
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ElementsModule,
    UsersRoutingModule,
    FormsModule,
    CodemirrorModule,
    //HighlightDirective
  ],
  providers: [
    UserService
  ],
  exports:[
    ElementsModule,
    //HighlightDirective
  ]
})
export class UsersModule { }
