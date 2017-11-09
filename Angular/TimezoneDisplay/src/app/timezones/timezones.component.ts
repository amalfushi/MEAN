import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-timezones',
  templateUrl: './timezones.component.html',
  styleUrls: ['./timezones.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TimezonesComponent implements OnInit {
  time = new Date();
  lastClicked = null;
  constructor() {
  }

  ngOnInit() {
  }

  adjustTime(offset) {
    this.time = new Date();
    this.lastClicked = offset;
    this.time.setHours(this.time.getHours()+offset);
    // console.log(this.time.getHours());
  }
  
  resetTime() {
    this.time = new Date();
    this.lastClicked = null;
  }
}
