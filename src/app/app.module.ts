import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {FwModule} from '../fw/fw.module';
import {AppRoutingModule} from './routing/app.routing.module';
import {ClubsRoutingModule} from './routing/clubs.routing.module';
import {HttpClientModule} from '@angular/common/http';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SocketIoModule.forRoot(config),
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    FwModule,
    ClubsRoutingModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
