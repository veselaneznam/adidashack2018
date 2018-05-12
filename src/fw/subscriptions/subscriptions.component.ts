import { Component, OnInit } from '@angular/core';
import {IClub} from '../clubs/club';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'fw-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {

  clubs: IClub[] = [
    {
      "clubId": 1,
      "name" : "Chelsie",
      "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 2,
      "name" : "Arsenal",
      "imgSrc": "../assets/images/aresenal.jpg"
    },
  ];
  constructor(private _route: ActivatedRoute,
              private  _router: Router) { }

  ngOnInit() {
  }

  seeEvents(): void {
    this._router.navigate(['subscriptions/events']);
  }

}
