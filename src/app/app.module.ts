import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeroComponent } from './hero/hero.component';
import { WeddingDetailsComponent } from './wedding-details/wedding-details.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { TravelComponent } from './travel/travel.component';
import { PortlandComponent } from './portland/portland.component';
import { RegistryComponent } from './registry/registry.component';
import { AttendingComponent } from './attending/attending.component';
import { SigninComponent } from './signin/signin.component';

import {Ng2Webstorage} from 'ng2-webstorage';
import { ProfileComponent } from './profile/profile.component';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeroComponent,
    WeddingDetailsComponent,
    RsvpComponent,
    TravelComponent,
    PortlandComponent,
    RegistryComponent,
    AttendingComponent,
    SigninComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    Ng2Webstorage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
