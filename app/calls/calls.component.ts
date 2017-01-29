import { Component } from '@angular/core';

const dummyStats: Stat[] = [{
  label: "Calling Now",
  count: 123
}, {
  label: "Calls Today",
  count: 1000
}, {
  label: "Calls This Month",
  count: 2000
}]

@Component({
  selector: 'calls',
  templateUrl: 'app/calls/calls.component.html',
  styleUrls: ['app/calls/calls.component.css']
})

export class CallsComponent {
  stats = dummyStats;
}

export class Stat {
  label: string;
  count: number;
}
