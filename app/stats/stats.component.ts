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
  selector: 'stats',
  templateUrl: 'app/stats/stats.component.html',
  styleUrls: ['app/stats/stats.component.css']
})

export class StatsComponent {
  stats = dummyStats;
}

export class Stat {
  label: string;
  count: number;
}
