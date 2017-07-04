import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})

export class RsvpComponent implements OnInit {
  currentTime = new Date();
  hour: number = this.currentTime.getHours();
  minute: number = this.currentTime.getMinutes();

  constructor() { }

  ngOnInit() {
  }

}
