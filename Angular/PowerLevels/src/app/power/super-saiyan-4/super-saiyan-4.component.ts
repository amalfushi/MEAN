import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-4',
  templateUrl: './super-saiyan-4.component.html',
  styleUrls: ['./super-saiyan-4.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SuperSaiyan4Component implements OnInit {
  @Input() level;

  constructor() { }

  ngOnInit() {
  }

}
