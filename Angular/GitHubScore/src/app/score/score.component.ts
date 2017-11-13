import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ScoreService } from "./../score.service";


@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ScoreComponent implements OnInit {

  user = {};
  score = null;
  userExists = null;

  constructor(private _scoreService: ScoreService) { }

  ngOnInit() {
  }

  getUser(gUser){
    this._scoreService.retrieveUser(gUser, 
      (user)=>{
        this.userExists = true;
        this.user = user;
        this.score = user.public_repos + user.followers;
      },
      (error)=>{
        this.userExists= false
      }
    );
  }
}
