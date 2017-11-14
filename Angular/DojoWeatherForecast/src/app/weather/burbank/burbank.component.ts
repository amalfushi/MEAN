import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WeatherService } from '../../weather.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BurbankComponent implements OnInit {
  
  city:String = "burbank";
  min = null;
  max = null;
  temp = null;
  humidity = null;
  status = null;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeather();
  }

  getWeather(){
    this._weatherService.retrieveWeather(this.city, 
      (weather)=>{
        this.temp = Math.round(weather.main.temp *(9/5)-457);
        this.max = Math.round(weather.main.temp_max *(9/5)-457);
        this.min = Math.round(weather.main.temp_min *(9/5)-457);
        this.humidity = Math.round(weather.main.humidity);
        this.status = weather.weather[0].description;
      },
      (err)=>{
        this.status = "City not found!";
      }
    );
  }
}