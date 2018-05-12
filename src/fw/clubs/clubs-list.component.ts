import {Component, OnInit} from '@angular/core';
import {IClub} from './club';
import {ClubsService} from './clubs.service';
import { Socket } from 'ng-socket-io';

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
      "name" : "Russia",
      "imgSrc": "../assets/images/chelsi.jpg"
    },
    {
      "clubId": 2,
      "name" : "Uruguay",
      "imgSrc": "../assets/images/aresenal.jpg"
    },
    {
      "clubId": 3,
      "name" : "Egypt",
      "imgSrc": "../assets/images/manchestur.jpg"
    },
    {
      "clubId": 4,
      "name" : "Tunissia",
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

  constructor(private _clubService: ClubsService, private socket:Socket) {
    console.log('socket init');
    this.socket.on('event', (e)=>{
      if(e.type==='GOAL') {
        console.log(e);
        if(e.nationalTeam) {
          let scoringClub = this.clubs.find(({name}) => true|| e.nationalTeam.name === name)
          if(scoringClub) {
            scoringClub.event = `${e.player.firstName} ${e.player.lastName} SCORED`;
            console.log(scoringClub.event);
          }
        }
      }
    });
  }
}
