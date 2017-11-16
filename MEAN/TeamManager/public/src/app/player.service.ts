import { Injectable } from '@angular/core';
import { Player } from './player';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PlayerService {

  playersObservable = new BehaviorSubject(null);

  constructor(private _http:Http) { }

  getPlayers(){
    this._http.get("/players").subscribe(
      (res)=>{
        this.playersObservable.next(res.json());/////questionable
        // callback(res.json())
      },
      (err)=>{
        console.log(err.json())
      }
    )
  }

  create(newPlayer:Player, callback){
    this._http.post("/players", newPlayer).subscribe(
      res=> callback(res.json()),
      err=> console.log(err)
    )
  }

  delete(playerID:String, callback){
    this._http.delete("/players/"+playerID).subscribe(
      res=> callback(res.json()),
      err=> console.log(err)
    )
  }

  updatePlayer(player, game, status){
   if(game===1){
     player.status.game1 = status;
   } else if (game===2){
     player.status.game2 = status;
   } else {
     player.status.game3 = status;
   }

   this._http.put("/players", player).subscribe(
     res=> this.getPlayers(),
     err=> console.log()
   )
  }
}
