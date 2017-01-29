import { Component } from '@angular/core';

const dummyState: UserState = {
  logged_in: false,
  username: ""
}

@Component({
  selector: 'user',
  templateUrl: 'app/user/user.component.html',
  styleUrls: ['app/user/user.component.css']
})

export class UserComponent { 
  state = dummyState; 
}

export class UserState {
  logged_in: boolean;
  username: string;
}