import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from './../user';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class RegFormComponent implements OnInit {
  user = new User();
  constructor() { }

  ngOnInit() {
  }
  onsubmit(){
    console.log(this.user);
  }
}
