import { Component, OnInit } from '@angular/core';
import { LocalStorageService, LocalStorage } from 'ng2-webstorage';


@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {
  currentGuest;

  constructor(
    private storage: LocalStorageService
  ) { }

  ngOnInit() {
    this.currentGuest = this.storage.retrieve('currentGuestObject');
    console.log(this.currentGuest);
  }

}
