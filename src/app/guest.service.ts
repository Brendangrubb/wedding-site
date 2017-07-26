import { Injectable } from '@angular/core';
import { Guest } from './guest.model';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class GuestService {
  guests: FirebaseListObservable<any[]>;

  getGuests() {
    return this.guests;
  }

  addGuest(newGuest: Guest) {
    this.guests.push(newGuest);
  }



  constructor(private db: AngularFireDatabase) {
    this.guests = db.list('guests');
  }

}
