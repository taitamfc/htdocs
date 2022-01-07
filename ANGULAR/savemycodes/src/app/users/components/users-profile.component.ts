import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from './../services/user.service';

@Component({
  selector: 'app-users-profile',
  templateUrl: './../templates/users-profile.component.html',
})
export class UsersProfileComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  loading   = false;
  returnUrl = false;
  user = {
    'username' : '',
    'password' : ''
  };
  errorMessage: string;
  
  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UserService,
    private _activatedRouteService: ActivatedRoute,
    private _routerService: Router,
  ) {

  }

  ngOnInit(): void {
    console.log('UsersProfileComponent');
  }

  onSubmit() { 
    this.submitted = true;
    console.log('UsersProfileComponent Submitted'); 
    console.log( this.user );
  }

  postLogin(){
    console.log( this.user );
  }
}
