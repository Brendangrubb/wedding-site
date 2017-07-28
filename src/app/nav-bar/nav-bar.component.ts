import { Component, OnInit } from '@angular/core';
import { LocalStorageService, LocalStorage } from 'ng2-webstorage';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  currentGuest;
  guestName;

  constructor(
    private storage: LocalStorageService,
    private router: Router
  )
  { }

  ngOnInit() {
    this.currentGuest = this.storage.retrieve('currentGuestObject');
    console.log(this.currentGuest);
    this.guestName = this.currentGuest.rsvpName;
  }

  logOff() {
    this.storage.clear('currentGuestObject');
  }

}
