import { Component } from '@angular/core';

const dummyCall: Call = {
    number: "(801) 425-3523",
    photo: "/assets/placeholder.jpg",
    script: "Hiya."
}

@Component({
  selector: 'call',
  templateUrl: 'app/call/call.component.html',
  styleUrls: ['app/call/call.component.css']
})

export class CallComponent {
    call = dummyCall;
}

export class Call {
    number: string;
    photo: string;
    script: string;
}