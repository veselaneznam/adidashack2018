import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FrameworkBodyComponent} from './framework-body/framework-body.component';
import {ContentComponent} from './content/content.component';
import {TitleBarComponent} from './title-bar/title-bar.component';
import {FrameworkConfigService} from './services/framework-config.service';
import {TopBarComponent} from './top-bar/top-bar.component';
import {StatusBarComponent} from './status-bar/status-bar.component';
import {ScreenService} from './services/screen.service';
import {ScreenBelowLargeDirective} from './directives/screen-below-large.directive';
import {ScreenLargeDirective} from './directives/screen-large.directive';
import {ClubsService} from './clubs/clubs.service';
import {ClubsListComponent} from './clubs/clubs-list.component';
import {ClubsDetailComponent} from './clubs/clubs-detail.component';
import {EventsService} from './events/events.service';
import {SubscriptionsComponent} from './subscriptions/subscriptions.component';
import {EventsComponent} from './events/events.component';
import {RouterModule} from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    TitleBarComponent,
    TopBarComponent,
    StatusBarComponent,
    ScreenBelowLargeDirective,
    ScreenLargeDirective,
    ClubsListComponent,
    ClubsDetailComponent,
    SubscriptionsComponent,
    EventsComponent
  ],
  providers: [
    FrameworkConfigService,
    ScreenService,
    ClubsService,
    EventsService
  ],
  exports: [FrameworkBodyComponent, ClubsListComponent, SubscriptionsComponent, EventsComponent]
})
export class FwModule { }
