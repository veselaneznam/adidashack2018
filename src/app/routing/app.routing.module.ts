
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ClubsListComponent} from '../../fw/clubs/clubs-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'clubs', component: ClubsListComponent },
      { path: '', redirectTo : 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo : 'welcome', pathMatch: 'full'},
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
