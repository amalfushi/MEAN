import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
