import { Component, OnInit } from '@angular/core';
import { IClub } from '../clubs/club';
import { ActivatedRoute, Router } from '@angular/router';
import { Socket } from 'ng-socket-io';

@Component({
  selector: 'fw-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {

  clubs: IClub[] = [
    {
      "clubId": 1,
      "name": 'Russia', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 2,
      "name": 'Saudi Arabia', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 3,
      "name": 'Egypt', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 4,
      "name": 'Uruguay', "imgSrc": "../assets/images/chelsi.jpg"
    },
  ];
  constructor(private _route: ActivatedRoute,
    private _router: Router, private socket: Socket) {

  }

  ngOnInit() {
    this.socket.on('event', (e) => {
      if (e.nationalTeam && e.type === 'GOAL') {
        let club = this.clubs.find(({ name }) => e.nationalTeam.name === name)
        if (club) {
          club.event = club.event || '';
          club.event += `
          ${e.player.firstName} ${e.player.lastName} SCORED`;
        }
      }
    });
  }

  seeEvents(clubId): void {
    this._router.navigate([`subscriptions/events/${clubId}`]);
  }

}
