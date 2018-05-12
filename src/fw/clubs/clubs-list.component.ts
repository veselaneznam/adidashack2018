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
      "clubId": 1,
      "name" : "Chelsie",
      "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 2,
      "name" : "Arsenal",
      "imgSrc": "../assets/images/aresenal.jpg"
    },
    {
      "clubId": 3,
      "name" : "Manchestur",
      "imgSrc": "../assets/images/manchestur.jpg"
    },
    {
      "clubId": 4,
      "name" : "Manchestur United",
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

  subscribe(): void {
    return alert('You have successfuly subscribed to this team events');
  }

  constructor(private _clubService: ClubsService) {
  }
}
