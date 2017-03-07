import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { LoginContent } from '../login/login.content';

const dummyState: UserState = {
  logged_in: false,
  username: 'zachzundel'
}

@Component({
  selector: 'user',
  templateUrl: 'app/user/user.component.html',
  styleUrls: ['app/user/user.component.css']
})

export class UserComponent {
  state = dummyState;

  constructor(private modalService: NgbModal) { }

  login() {
    this.modalService.open(LoginContent, {
      backdrop: 'static',
      keyboard: false
    });
  }
}

export class UserState {
  logged_in: boolean;
  username: string;
}
