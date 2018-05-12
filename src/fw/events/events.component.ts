import { Component, OnInit } from '@angular/core';
import {IEvent} from './event';

@Component({
  selector: 'fw-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events = [
    {
      eventId: 1,
      eventName: 'Match',
      isLive: true,
      imgSrc: ''
    },
    {
      eventId: 2,
      eventName: 'Match 2',
      isLive: false,
      imgSrc: ''
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  participate(): void {

  }
}
