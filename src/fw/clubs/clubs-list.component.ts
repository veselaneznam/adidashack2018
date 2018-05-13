import {Component, OnInit} from '@angular/core';
import {IClub} from './club';
import {ClubsService} from './clubs.service';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs-list.component.html',
  styleUrls: ['./clubs-list.component.css']
})
export class ClubsListComponent implements OnInit {
  pageTitle: string = 'Clubs List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string;

  clubs: IClub[] = [
    {
      "clubId": 15,
      "imgResultSrc": "../assets/images/chelsi.jpg",
      "name" : "Colombia",
      "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 8,
      "name" : "Japan",
      "imgResultSrc": "../assets/images/chelsi.jpg",
      "imgSrc": "../assets/images/aresenal.jpg"
    },
    {
      "clubId": 16,
      "name" : "Polad",
      "imgResultSrc": "../assets/images/chelsi.jpg",
      "imgSrc": "../assets/images/manchestur.jpg"
    },
    {
      "clubId": 6,
      "name" : "Senegal",
      "imgResultSrc": "../assets/images/chelsi.jpg",
      "imgSrc": "../assets/images/manchesturUnited.jpg"
    },
    {
      "clubId": 18,
      "name" : "Portugal",
      "imgResultSrc": "../assets/images/chelsi.jpg",
      "imgSrc": "../assets/images/manchesturUnited.jpg"
    },
    {
      "clubId": 19,
      "name" : "Uruguay",
      "imgResultSrc": "../assets/images/chelsi.jpg",
      "imgSrc": "../assets/images/manchesturUnited.jpg"
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
