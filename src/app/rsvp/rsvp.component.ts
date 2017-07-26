import { Component, OnInit } from '@angular/core';
import { Guest } from './../guest.model';
import { GuestService } from './../guest.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css'],
  providers: [GuestService, AngularFireAuth]
})


export class RsvpComponent implements OnInit {
  guests: FirebaseListObservable<any[]>;

  constructor(
    private router: Router,
    private location: Location,
    private guestService: GuestService,
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.guests = this.guestService.getGuests();
  }

  submitForm(rsvpName: string, rsvpEmail: string, rsvpPassword: string, rsvpAttend: string, rsvpBringGuest: string, rsvpAnythingElse: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(rsvpEmail, rsvpPassword)
    .then( () => {
      var uid = this.afAuth.auth.currentUser.uid;
      var newGuest: Guest = new Guest(rsvpName, rsvpEmail, rsvpAttend, rsvpBringGuest, rsvpAnythingElse, uid);
      this.guestService.addGuest(newGuest);
    })

  }

}
