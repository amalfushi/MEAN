import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PowerComponent implements OnInit {
  level: number;

  constructor() { }

  ngOnInit() {
    this.level = 1;
  }

}
