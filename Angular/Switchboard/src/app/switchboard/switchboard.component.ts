import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-switchboard',
  templateUrl: './switchboard.component.html',
  styleUrls: ['./switchboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SwitchboardComponent implements OnInit {
  switches: Object = [
    {state: false},
    {state: false},
    {state: false},
    {state: false},
    {state: false},
    {state: false},
    {state: false},
    {state: false},
    {state: false},
    {state: false},
  ]

  constructor() { }

  ngOnInit() {
  }

  flip(idx){
    console.log(this.switches[idx])
    if (this.switches[idx].state){
      this.switches[idx].state = false;
    } else {
      this.switches[idx].state = true;
    }
  }
}
