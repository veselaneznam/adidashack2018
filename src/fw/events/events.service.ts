import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {IClub} from './club';
import {IEvent, IFanFeed, ILiveFeed} from './event';

@Injectable()
export class ClubsService {
  private _eventUrl = './api/events/events.json';

  constructor(private  _http: HttpClient) {}

  getClubEvents(): Observable<IEvent[]> {
    return this._http.get<IEvent[]>(this._eventUrl)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getClubEventById(id: number): Observable<IEvent> {
    return this.getClubEvents().map((event: IEvent[]) => event.find(e => e.eventId === id));
  }

  getEventLiveFeeds(): Observable<ILiveFeed[]> {
    return this._http.get<ILiveFeed[]>(this._eventUrl)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getEventFanFeeds(): Observable<IFanFeed[]> {
    return this._http.get<IFanFeed[]>(this._eventUrl)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log((err.message));
    return Observable.throw(err.message);
  }
}

