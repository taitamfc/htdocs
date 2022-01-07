import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-forgot',
  templateUrl: './../templates/users-forgot.component.html',
})
export class UsersForgotComponent implements OnInit {
  submitted = false;
  user = {
    'username' : '',
    'password' : ''
  };
  constructor() {

  }

  ngOnInit(): void {
    console.log('UsersForgotComponent');
  }

  onSubmit() { 
    this.submitted = true;
    console.log('UsersForgotComponent Submitted'); 
    console.log( this.user );
  }

  postLogin(){
    console.log( this.user );
  }
}
