import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-barcode-generator',
  templateUrl: './barcode-generator.component.html',
  styleUrls: ['./barcode-generator.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BarcodeGeneratorComponent implements OnInit {
  r = Math.floor(Math.random()*255);
  g = Math.floor(Math.random()*255);
  b = Math.floor(Math.random()*255);
  
  constructor() { 
  }

  ngOnInit() {
  }
}
