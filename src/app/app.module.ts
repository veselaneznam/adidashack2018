import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {FwModule} from '../fw/fw.module';
import {AppRoutingModule} from './routing/app.routing.module';
import {ClubsRoutingModule} from './routing/clubs.routing.module';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
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
