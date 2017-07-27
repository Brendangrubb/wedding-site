import { Component, OnInit } from '@angular/core';
import { Guest } from './../guest.model';
import { GuestService } from './../guest.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [GuestService, AngularFireAuth]
})

export class SigninComponent implements OnInit {
  // guest: Observable<firebase.Guest>;

  constructor(
    private guestService: GuestService,
    private afAuth: AngularFireAuth,
// CHECK HERE
    private afdb: AngularFireDatabaseModule,
    private router: Router
  ) {
    // this.guest = afAuth.authState;
  }

  ngOnInit() {
  }

  logIn(loginEmail:string, loginPassword:string) {
    this.afAuth.auth.signInWithEmailAndPassword(loginEmail, loginPassword)
    .then( () => {
      console.log(this.afAuth.auth.currentUser);
    })
  }

      // .then(function(userCredential) {
      //   console.log(userCredential.additionalUserInfo.username);
      // });

}
