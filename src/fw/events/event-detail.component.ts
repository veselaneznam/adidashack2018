import { Component, OnInit } from '@angular/core';
import {IEvent} from './event';
import {IClub} from '../clubs/club';

@Component({
  selector: 'app-events',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  event: IEvent =
    {
      "eventId": 1,
      "eventName" : "Chelsie",
      "isLive": true,
      "imgSrc" : ''
    };

  constructor() { }

  ngOnInit() {
  }

}
