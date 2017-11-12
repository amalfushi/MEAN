import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-3',
  templateUrl: './super-saiyan-3.component.html',
  styleUrls: ['./super-saiyan-3.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SuperSaiyan3Component implements OnInit {
  @Input() level;
  
  constructor() { }

  ngOnInit() {
  }

}
