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
    {
      "clubId": 5,
      "name": 'Morocco', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 6,
      "name": 'IR Iran', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 7,
      "name": 'Portugal', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 8,
      "name": 'Spain', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 9,
      "name": 'France', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 10,
      "name": 'Australia', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 11,
      "name": 'Argentina', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 12,
      "name": 'Iceland', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 13,
      "name": 'Peru', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 14, "name": 'Denmark', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 15,
      "name": 'Croatia', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 16,
      "name": 'Nigeria', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 17,
      "name": 'Costa', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 18,
      "name": 'Serbia', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 19,
      "name": 'Germany', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 20,
      "name": 'Mexico', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 21,
      "name": 'Brazil', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 22,
      "name": 'Switzerland', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 23,
      "name": 'Sweden', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 24,
      "name": 'Korea', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 25,
      "name": 'Belgium', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 26,
      "name": 'Panama', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 27,
      "name": 'Tunisia', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 28,
      "name": 'England', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 29,
      "name": 'Colombia', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 30,
      "name": 'Japan', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 31,
      "name": 'Poland', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 32,
      "name": 'Senegal', "imgSrc": "../assets/images/chelsi.jpg"
    }
  ];
  constructor(private _route: ActivatedRoute,
    private _router: Router, private socket: Socket) {
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

  ngOnInit() {
  }

  seeEvents(clubId): void {
    this._router.navigate([`subscriptions/events/${clubId}`]);
  }

}
