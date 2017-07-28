import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { LocalStorageService, LocalStorage } from 'ng2-webstorage';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  providers: [AngularFireAuth]

})
export class HeroComponent implements OnInit {
  currentGuest;

  constructor(
    private afAuth: AngularFireAuth,
    private storage: LocalStorageService
  ) { }

  ngOnInit() {
    console.log(this.afAuth.auth.currentUser);
    this.currentGuest = this.storage.retrieve('currentGuestObject');
    console.log(this.currentGuest);
  }

}
