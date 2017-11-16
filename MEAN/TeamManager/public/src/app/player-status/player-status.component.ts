import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-status',
  templateUrl: './player-status.component.html',
  styleUrls: ['./player-status.component.css']
})
export class PlayerStatusComponent implements OnInit {

  players: Player[]

  constructor(private _playerService:PlayerService) { }

  ngOnInit() {
    this._playerService.playersObservable.subscribe(
      players => this.players = players)
      this._playerService.getPlayers()
  }

  updateGame(player, game, status){
    this._playerService.updatePlayer(player, game, status)
  }
}
