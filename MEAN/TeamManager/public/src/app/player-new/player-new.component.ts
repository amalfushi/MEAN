import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-new',
  templateUrl: './player-new.component.html',
  styleUrls: ['./player-new.component.css']
})
export class PlayerNewComponent implements OnInit {

  newPlayer:Player = new Player()

  constructor(private _playerService:PlayerService, private _router:Router) { }

  ngOnInit() {
  }

  addPlayer(){
    if (this.newPlayer.position==""){
      this.newPlayer.position="N/A"
    }
    this._playerService.create(this.newPlayer, (succes)=>{
      this.newPlayer = new Player();
      this._playerService.getPlayers();
      this._router.navigate(['']);
    })
  }
}
