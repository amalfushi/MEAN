import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ScoreService {

  constructor(private _http:Http) { }

  retrieveUser(gUser, callback, errorCallback){
    this._http.get('https://api.github.com/users/'+gUser).subscribe(
      (response) => { 
        callback(response.json());
      },
      (error) => {
        errorCallback(error.json()); 
      })
  };
  
}
