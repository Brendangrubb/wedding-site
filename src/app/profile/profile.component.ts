import { Component, OnInit } from '@angular/core';
import { Guest } from './../guest.model';
import { GuestService } from './../guest.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseListObservable } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService, SessionStorageService } from 'ng2-webstorage';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [GuestService, AngularFireAuth]
})
export class ProfileComponent implements OnInit {
  currentGuest;
  rsvpName;
  rsvpEmail;
  rsvpAttend;
  rsvpBringGuest;
  rsvpAnythingElse;

  constructor(
    private guestService: GuestService,
    private afAuth: AngularFireAuth,
    private afdb: AngularFireDatabase,
    private router: Router,
    private storage: LocalStorageService
  ) { }

  ngOnInit() {
    this.currentGuest = this.storage.retrieve('currentGuestObject');
    console.log(this.currentGuest);
    this.rsvpName = this.currentGuest.rsvpName;
    this.rsvpEmail = this.currentGuest.rsvpEmail;
    this.rsvpAttend = this.currentGuest.rsvpAttend;
    this.rsvpBringGuest = this.currentGuest.rsvpBringGuest;
    this.rsvpAnythingElse = this.currentGuest.rsvpAnythingElse;
  }

}
