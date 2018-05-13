import { Component, OnInit } from '@angular/core';
import { IEvent } from './event';
import { Socket } from 'ng-socket-io';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute, private socket: Socket) {
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


  ngOnInit() {
  }

  participate(): void {

  }
}
