import { Component } from '@angular/core';

const dummyCards: FeedCard[] = [
  {
    title: 'New legislation',
    body: 'A new piece of legislation has been introduced',
    color: '#cabcab',
    action: 'View',
    destination: 'legislation/1235'
  },
  {
    title: 'New legislation',
    body: 'A new piece of legislation has been introduced',
    color: '#cabcab',
    action: 'View',
    destination: 'legislation/1235'
  },
  {
    title: 'New legislation',
    body: 'A new piece of legislation has been introduced',
    color: '#cabcab',
    action: 'View',
    destination: 'legislation/1235'
  }
]

@Component({
  selector: 'feed',
  templateUrl: 'app/feed/feed.component.html',
  styleUrls: ['app/feed/feed.component.css']
})

export class FeedComponent {
  feed = dummyCards;
}

export class FeedCard {
  title: string;
  body: string;
  color: string;
  action: string;
  destination: string;
}
