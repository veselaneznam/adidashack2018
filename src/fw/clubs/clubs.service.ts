import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {IClub} from './club';

@Injectable()
export class ClubsService {
  private _clubUrl = './api/clubs/clubs.json';

  constructor(private  _http: HttpClient) {}

  getClubs(): Observable<IClub[]> {
    return this._http.get<IClub[]>(this._clubUrl)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getClubById(id: number): Observable<IClub> {
    return this.getClubs().map((clubs: IClub[]) => clubs.find(c => c.clubId === id));
  }

  private handleError(err: HttpErrorResponse) {
    console.log((err.message));
    return Observable.throw(err.message);
  }
}
