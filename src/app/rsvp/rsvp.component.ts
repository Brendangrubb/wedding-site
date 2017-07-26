import { Component, OnInit } from '@angular/core';
import { Guest } from './../guest.model';
import { GuestService } from './../guest.service';
import { AngularFireModule } from 'angularfire2';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css'],
  providers: [GuestService]
})


export class RsvpComponent implements OnInit {
  guests: FirebaseListObservable<any[]>;


  submitForm(rsvpName: string, rsvpAttend: string, rsvpBringGuest: string, rsvpAnythingElse: string) {
    var newGuest: Guest = new Guest(rsvpName, rsvpAttend, rsvpBringGuest, rsvpAnythingElse);
    this.guestService.addGuest(newGuest);
  }

  constructor(private router: Router, private location: Location, private guestService: GuestService) { }

  ngOnInit() {
    this.guests = this.guestService.getGuests();
  }

}
