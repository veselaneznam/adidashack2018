import {Component, OnInit} from '@angular/core';
import {IEvent, IFanFeed, ILiveFeed} from './event';
import {Socket} from 'ng-socket-io';
import {ActivatedRoute} from '@angular/router';

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
      'eventName': 'Chelsea',
      'isLive': true,
      'imgSrc': '../assets/images/chelsie-event.jpg',
    };


  eventLiveFeeds: ILiveFeed[] = [{
      "feedType": "GOAL!!!",
      "feedImage": "../assets/images/goal.jpg",
      'likes' : 100,
    },
    {
      "feedType": "WIN",
      "feedImage": "../assets/images/win.jpg",
      'likes' : 100,
    }
];

eventFanFeeds: IFanFeed[] = [{
  "feedType": "GOAL!!!",
"feedImage": "../assets/images/goal.jpg",
  "likes": 20,
},
{
  "feedType": "WIN",
  "feedImage": "../assets/images/win.jpg",
  "likes": 20,
}
];

constructor(private socket: Socket, private route: ActivatedRoute)
{
}

 ngOnInit(): void {
  this.socket.on('event', (e) => {
  if (e.nationalTeam && e.nationalTeam.id === this.route.snapshot.paramMap.get('id') && e.type === 'GOAL') {
    console.log(e);
    let event = this.events.find(({eventName}) => e.nationalTeam.name === eventName);
    if (event) {
      event.eventName = `${e.player.firstName} ${e.player.lastName} SCORED`;
      //console.log(scoringClub.event);
    }
  }
});
}
}
