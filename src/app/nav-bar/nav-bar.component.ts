import { Component, OnInit } from '@angular/core';
import { LocalStorageService, LocalStorage } from 'ng2-webstorage';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  currentGuest;

  constructor(
    private storage: LocalStorageService
  )
  { }

  ngOnInit() {
    this.currentGuest = this.storage.retrieve('currentGuestObject');
    console.log(this.currentGuest);
  }

}
