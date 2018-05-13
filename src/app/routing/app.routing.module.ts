
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ClubsListComponent} from '../../fw/clubs/clubs-list.component';
import {EventsComponent} from '../../fw/events/events.component';
import {SubscriptionsComponent} from '../../fw/subscriptions/subscriptions.component';
import {ClubsDetailComponent} from '../../fw/clubs/clubs-detail.component';
import {EventDetailComponent} from '../../fw/events/event-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'clubs', component: ClubsListComponent },
      { path: 'subscriptions', component: SubscriptionsComponent },
      { path: 'subscriptions/events/:id', component: EventsComponent },
      { path: 'subscriptions/event-detail/:id', component: EventDetailComponent },
      { path: 'subscriptions/events', component: EventsComponent },
      { path: 'clubs/:id', component: ClubsDetailComponent },
      { path: 'clubs', redirectTo : 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo : 'welcome', pathMatch: 'full'},
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
