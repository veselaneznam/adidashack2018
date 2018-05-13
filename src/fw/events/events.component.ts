import { Component, OnInit } from '@angular/core';
import { IEvent } from './event';
import { Socket } from 'ng-socket-io';
import {ActivatedRoute, Router} from '@angular/router';

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
      imgSrc: '../assets/images/chelsie-event.jpg'
    },
    {
      eventId: 2,
      eventName: 'Match 2',
      isLive: false,
      imgSrc: '../assets/images/chelsie-event.jpg'
    },
  ];

  constructor(private socket: Socket, private route: ActivatedRoute, private _router: Router) {
  }


  ngOnInit() {
    this.socket.on('event', (e) => {
      if (e.nationalTeam && e.nationalTeam.id === this.route.snapshot.paramMap.get('id') && e.type === 'GOAL') {
        console.log(e);
        let event = this.events.find(({ eventName }) => e.nationalTeam.name === eventName)
        if (event) {
          event.eventName = `${e.player.firstName} ${e.player.lastName} SCORED`;
          // console.log(scoringClub.event);
        }
      }
    });
  }

  participate(eventId): void {
    this._router.navigate([`subscriptions/event-detail/${eventId}`]);
  }
}
