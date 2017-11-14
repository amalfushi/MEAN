import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class WeatherService {
  url:String = "https://api.openweathermap.org/data/2.5/weather?q="
  key:String = "&&appid=98a6e08a1fb21f0d49925610af989639"
  
  "https://api.openweathermap.org/data/2.5/weather?q=sanjose&&appid=98a6e08a1fb21f0d49925610af989639"
  constructor(private _http:Http) { }

  retrieveWeather(city, callback, errorCallback){
    console.log(this.url+city+this.key)
    this._http.get(this.url+city+this.key).subscribe(
      (res) => {callback(res.json())},
      (err) => {errorCallback(err)}
    )
  }
}
