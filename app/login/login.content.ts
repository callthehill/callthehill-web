import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: 'app/login/login.content.html',
  styleUrls: ['app/login/login.content.css']
})
export class LoginContent {
  data: LoginData = new LoginData();

  constructor(public activeModal: NgbActiveModal) {}
}

export class LoginData {
  email: string;
  password: string;
}
