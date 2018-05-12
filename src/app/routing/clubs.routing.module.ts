
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ClubsListComponent} from '../../fw/clubs/clubs-list.component';
import {ClubsDetailComponent} from '../../fw/clubs/clubs-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'clubs', component: ClubsListComponent },
      { path: 'clubs/:id', component: ClubsDetailComponent },
    ]),
  ],
  exports: [RouterModule]
})
export class ClubsRoutingModule { }
