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
      "clubId": 1,"imgResultSrc": "../assets/images/chelsi.jpg",
      "name": 'Russia', "imgSrc": "../assets/images/chelsi.jpg",
    },
    {
      "clubId": 2,"imgResultSrc": "../assets/images/chelsi.jpg",
      "name": 'Saudi Arabia', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 3,"imgResultSrc": "../assets/images/chelsi.jpg",
      "name": 'Egypt', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 4,"imgResultSrc": "../assets/images/chelsi.jpg",
      "name": 'Uruguay', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 5,"imgResultSrc": "../assets/images/chelsi.jpg",
      "name": 'Morocco', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 6,"imgResultSrc": "../assets/images/chelsi.jpg",
      "name": 'IR Iran', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 7,"imgResultSrc": "../assets/images/chelsi.jpg",
      "name": 'Portugal', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 8,"imgResultSrc": "../assets/images/chelsi.jpg",
      "name": 'Spain', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 9,"imgResultSrc": "../assets/images/chelsi.jpg",
      "name": 'France', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 10,"imgResultSrc": "../assets/images/chelsi.jpg",
      "name": 'Australia', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 11,"imgResultSrc": "../assets/images/chelsi.jpg",
      "name": 'Argentina', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 12,"imgResultSrc": "../assets/images/chelsi.jpg",
      "name": 'Iceland', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 13,"imgResultSrc": "../assets/images/chelsi.jpg",
      "name": 'Peru', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "imgResultSrc": "../assets/images/chelsi.jpg",
      "clubId": 14, "name": 'Denmark', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 15,"imgResultSrc": "../assets/images/chelsi.jpg",
      "name": 'Croatia', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 16,"imgResultSrc": "../assets/images/chelsi.jpg",
      "name": 'Nigeria', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 17,"imgResultSrc": "../assets/images/chelsi.jpg",
      "name": 'Costa', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 18,"imgResultSrc": "../assets/images/chelsi.jpg",
      "name": 'Serbia', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 19,"imgResultSrc": "../assets/images/chelsi.jpg",
      "name": 'Germany', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 20,"imgResultSrc": "../assets/images/chelsi.jpg",
      "name": 'Mexico', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 21,"imgResultSrc": "../assets/images/chelsi.jpg",
      "name": 'Brazil', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 22,"imgResultSrc": "../assets/images/chelsi.jpg",
      "name": 'Switzerland', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 23,"imgResultSrc": "../assets/images/chelsi.jpg",
      "name": 'Sweden', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 24,"imgResultSrc": "../assets/images/chelsi.jpg",
      "name": 'Korea', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 25,"imgResultSrc": "../assets/images/chelsi.jpg",
      "name": 'Belgium', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 26,"imgResultSrc": "../assets/images/chelsi.jpg",
      "name": 'Panama', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 27,"imgResultSrc": "../assets/images/chelsi.jpg",
      "name": 'Tunisia', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 28,"imgResultSrc": "../assets/images/chelsi.jpg",
      "name": 'England', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 29,"imgResultSrc": "../assets/images/chelsi.jpg",
      "name": 'Colombia', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 30,"imgResultSrc": "../assets/images/chelsi.jpg",
      "name": 'Japan', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 31, "imgResultSrc": "../assets/images/chelsi.jpg",
      "name": 'Poland', "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 32,"imgSrc": "../assets/images/chelsi.jpg",
      "name": 'Senegal', "imgResultSrc": "../assets/images/chelsi.jpg"
    }
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
