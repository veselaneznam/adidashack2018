import { Component, OnInit } from '@angular/core';
import { IEvent, IFanFeed, ILiveFeed } from './event';
import { Socket } from 'ng-socket-io';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'fw-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  emotionIcon = '../assets/images/FB-Hand-Like_Dislike.png';
  cameraIcon = '../assets/images/camera-icon.png'
  event: IEvent =
    {
      'eventId': 1,
      'eventName': 'Russia Brasil',
      'isLive': true,
      'imgSrc': '../assets/images/RussiaBrazil.png',
    };


  eventLiveFeeds: ILiveFeed[] = [
    {
      "feedType": "GOAL!!!",
      "feedImage": "../assets/images/city.jpg",
      'likes': 233,
    },
    {
      "feedType": "Coaches agree it was a good game.",
      "feedImage": "../assets/images/city2.jpg",
      'likes': 95,
    },{
    "feedType": "GOAL!!!",
    "feedImage": "../assets/images/goal.jpg",
    'likes': 70,
  },
  {
    "feedType": "WIN",
    "feedImage": "../assets/images/win.jpg",
    'likes': 56,
  }
  ];

  eventFanFeeds: IFanFeed[] = [{
    "feedType": "GOAL!!!",
    "feedImage": "../assets/images/miss1.png",
    "likes": 503,
    "points" : 192
  },
  {
    "feedType": "WIN",
    "feedImage": "../assets/images/miss2.png",
    "likes": 209,
    "points" : 342
  }
  ];

  constructor(private socket: Socket, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.socket.on('event', (e) => {
      if (e.nationalTeam && e.nationalTeam.id === this.route.snapshot.paramMap.get('id') && e.type === 'GOAL') {
        console.log(e);
        let event = this.events.find(({ eventName }) => e.nationalTeam.name === eventName);
        if (event) {
          event.eventName = `${e.player.firstName} ${e.player.lastName} SCORED`;
          //console.log(scoringClub.event);
        }
      }
    });
  }
}
