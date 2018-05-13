import {Component, OnInit} from '@angular/core';
import {IClub} from './club';
import {ClubsService} from './clubs.service';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs-list.component.html',
  styleUrls: ['./clubs-list.component.css']
})
export class ClubsListComponent implements OnInit {

  clubs: IClub[] = [
    {
      "clubId": 15,
      "name" : "Colombia",
      "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 8,
      "name" : "Japan",
      "imgSrc": "../assets/images/aresenal.jpg"
    },
    {
      "clubId": 16,
      "name" : "Polad",
      "imgSrc": "../assets/images/manchestur.jpg"
    },
    {
      "clubId": 6,
      "name" : "Senegal",
      "imgSrc": "../assets/images/manchesturUnited.jpg"
    },
    {
      "clubId": 18,
      "name" : "Portugal",
      "imgSrc": "../assets/images/manchesturUnited.jpg"
    },
    {
      "clubId": 19,
      "name" : "Uruguay",
      "imgSrc": "../assets/images/manchesturUnited.jpg"
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

  ngOnInit(): void {
    // this._clubService.getClubs().subscribe(clubs => {
    //     this.clubs = clubs;
    //   },
    //   error => this.errorMessage = <any>error
    // );

  }

  subscribe(id:number): void {
    this.clubs[id].isSubscribed != this.clubs[id].isSubscribed;
  }

  constructor(private _clubService: ClubsService){
  }
}
