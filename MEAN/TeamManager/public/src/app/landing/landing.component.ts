import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  players: Player[];

  constructor(private _playerService:PlayerService) { }

  ngOnInit() {
    this.getPlayers()
    console.log(this.players);
  }

  getPlayers(){
    this._playerService.getPlayers((players) => this.players = players);
  }
}
