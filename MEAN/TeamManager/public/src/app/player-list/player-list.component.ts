import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  players: Player[]

  constructor(private _playerService:PlayerService) { }

  ngOnInit() {
    this._playerService.playersObservable.subscribe(players=> this.players =players)
  }

  // getPlayers(){
  //   this._playerService.getPlayers((players)=>{
  //     this.players = players;
  //   })
  // }

  deletePlayer(player){
    this._playerService.delete(player,(players)=>{
      this._playerService.getPlayers()
    })
  }
}
