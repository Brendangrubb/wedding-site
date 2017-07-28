import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  providers: [AngularFireAuth]

})
export class HeroComponent implements OnInit {

  constructor(    private afAuth: AngularFireAuth
) { }

  ngOnInit() {
    console.log(this.afAuth.auth.currentUser);
  }

}
