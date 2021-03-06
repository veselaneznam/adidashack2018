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
      "imgResultSrc": "../assets/images/chelsi.jpg",
      "name" : "Colombia",
      "imgSrc": "../assets/images/columbia.png"
    },
    {
      "clubId": 8,
      "name" : "Japan",
      "imgResultSrc": "../assets/images/chelsi.jpg",
      "imgSrc": "../assets/images/japan.png"
    },
    {
      "clubId": 16,
      "name" : "Poland",
      "imgResultSrc": "../assets/images/chelsi.jpg",
      "imgSrc": "../assets/images/poland.png"
    },
    {
      "clubId": 6,
      "name" : "Senegal",
      "imgResultSrc": "../assets/images/chelsi.jpg",
      "imgSrc": "../assets/images/senegal.png"
    },
    {
      "clubId": 18,
      "name" : "Portugal",
      "imgResultSrc": "../assets/images/chelsi.jpg",
      "imgSrc": "../assets/images/portugal.png"
    },
    {
      "clubId": 19,
      "name" : "Uruguay",
      "imgResultSrc": "../assets/images/chelsi.jpg",
      "imgSrc": "../assets/images/uruguay.jpg"
    },
  ];

  clubs2: IClub[] = [
    {
      "clubId": 50,
      "imgResultSrc": "../assets/images/chelsi.jpg",
      "name" : "Lakers",
      "imgSrc": "../assets/images/team3.jpg"
    },
    {
      "clubId": 51,
      "name" : "West",
      "imgResultSrc": "../assets/images/chelsi.jpg",
      "imgSrc": "../assets/images/team2.jpg"
    },
    {
      "clubId": 52,
      "name" : "Bulls",
      "imgResultSrc": "../assets/images/chelsi.jpg",
      "imgSrc": "../assets/images/team1.jpg"
    },
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
