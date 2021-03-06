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
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [GuestService, AngularFireAuth]
})

export class SigninComponent implements OnInit {
  guests: FirebaseListObservable<any[]>;
  guest: FirebaseObjectObservable<any[]>;
  currentGuest;
  rsvpName;


  constructor(
    private guestService: GuestService,
    private afAuth: AngularFireAuth,
    private afdb: AngularFireDatabase,
    private router: Router,
    private storage: LocalStorageService
  ) { }

  ngOnInit() {
  }

  logIn(loginEmail:string, loginPassword:string) {
    this.afAuth.auth.signInWithEmailAndPassword(loginEmail, loginPassword)
    .then( () => {
      let uid = this.afAuth.auth.currentUser.uid;
      let currentGuests = this.afdb.list('/guests', {
        query: {
          orderByChild: 'uid',
          equalTo: uid
        }
      });

      currentGuests.subscribe(eventEmitterData => {
        var data = eventEmitterData;
        this.storage.store('currentGuestObject', data[0]);
        console.log(data[0]);
      })
    })
    .then( () => {
      this.router.navigate(['/']);
    });
  }
}
