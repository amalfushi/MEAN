import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-2',
  templateUrl: './super-saiyan-2.component.html',
  styleUrls: ['./super-saiyan-2.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SuperSaiyan2Component implements OnInit {
  @Input() level;
  
  constructor() { }

  ngOnInit() {
  }

}
