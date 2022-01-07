import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elements-header',
  templateUrl: './header.component.html'
})
export class ElementsHeaderComponent implements OnInit{
  current_user = {
    'avatar'     : 'assets/images/avatars/profile.jpg',
    'fisrt_name' : 'Beni',
    'last_name'  : 'Arisandi',
    'full_name'  : 'Webmaster',
    'role_name'  : 'New Member',
  }
  constructor() {

  }
	ngOnInit() {
		
	}
}
