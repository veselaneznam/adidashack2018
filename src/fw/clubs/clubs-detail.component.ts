import {Component, OnInit} from '@angular/core';
import {IClub} from './club';
import {ClubsService} from './clubs.service';

@Component({
  selector: 'app-clubs-detail',
  templateUrl: './clubs-detail.component.html',
  styleUrls: ['./clubs-detail.component.css']
})
export class ClubsDetailComponent implements OnInit {
  errorMessage: string;

  clubs: IClub[] = [];

  ngOnInit(): void {
    this._clubService.getClubs().subscribe(clubs => {
        this.clubs = clubs;
      },
      error => this.errorMessage = <any>error
    );
  }

  constructor(private _clubService: ClubsService) {
  }
}
