import { Component, OnInit } from '@angular/core';
import { Guest } from './../guest.model';
import { GuestService } from './../guest.service';
import { AngularFireModule } from 'angularfire2';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { LocalStorageService, LocalStorage } from 'ng2-webstorage';



@Component({
  selector: 'app-attending',
  templateUrl: './attending.component.html',
  styleUrls: ['./attending.component.css'],
  providers: [GuestService]
})
export class AttendingComponent implements OnInit {
  guests: FirebaseListObservable<any[]>;
  currentGuest;

  constructor(
    private router: Router,
    private location: Location,
    private guestService: GuestService,
    private storage: LocalStorageService
  ) { }

  ngOnInit() {
    this.guests = this.guestService.getGuests();
    this.currentGuest = this.storage.retrieve('currentGuestObject');
    console.log(this.currentGuest);
  }

}
