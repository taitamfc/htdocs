import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from './../services/user.service';

@Component({
  selector: 'app-users-login',
  templateUrl: './../templates/users-login.component.html',
})
export class UsersLoginComponent implements OnInit {
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
    this.form = this._formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });

    this.returnUrl = this._activatedRouteService.snapshot.queryParams['returnUrl'] || '/users';
  }
  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() { 
    this.submitted = true;
    this.loading = true;

    // stop here if form is invalid
    console.log(this.form.invalid);
    if (this.form.invalid) {
      return;
    }
    
    //call service
    this._userService.login(this.f.username.value,this.f.password.value).subscribe( 
			(data: any) => {
        this._routerService.navigate([this.returnUrl]);
      },
			(error: any) => this.errorMessage = error
		);
  }

  postLogin(){
    console.log( this.user );
  }
}
