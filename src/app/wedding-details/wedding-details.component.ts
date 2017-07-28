import { Component, OnInit } from '@angular/core';
import { LocalStorageService, LocalStorage } from 'ng2-webstorage';


@Component({
  selector: 'app-wedding-details',
  templateUrl: './wedding-details.component.html',
  styleUrls: ['./wedding-details.component.css']
})
export class WeddingDetailsComponent implements OnInit {
  currentGuest;

  constructor(
    private storage: LocalStorageService
  ) { }

  ngOnInit() {
    this.currentGuest = this.storage.retrieve('currentGuestObject');
    console.log(this.currentGuest);
  }

}
