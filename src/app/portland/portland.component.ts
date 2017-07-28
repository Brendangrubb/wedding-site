import { Component, OnInit } from '@angular/core';
import { LocalStorageService, LocalStorage } from 'ng2-webstorage';


@Component({
  selector: 'app-portland',
  templateUrl: './portland.component.html',
  styleUrls: ['./portland.component.css']
})
export class PortlandComponent implements OnInit {
  currentGuest;

  constructor(
    private storage: LocalStorageService
  ) { }

  ngOnInit() {
    this.currentGuest = this.storage.retrieve('currentGuestObject');
    console.log(this.currentGuest);
  }

}
