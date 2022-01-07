import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-register',
  templateUrl: './../templates/users-register.component.html',
})
export class UsersRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('RegisterComponent');
  }

}
