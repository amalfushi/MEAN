import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EmailComponent implements OnInit {
  emails:object = [
    {
      address: "Bill@Gates.com",
      importance: true,
      subject: "New Windows",
      content: "Windows XI will launch in year 2100."
    },
    {
      address: "ada@lovelace.com",
      importance: true,
      subject: "Programming",
      content: "Enchantress of numbers"
    },
    {
      address: "John@Carmac.com",
      importance: false,
      subject: "Updated Algorithm",
      content: "New Algorithm for shadow volumes."
    },
    {
      address: "Gabe@valve.com",
      importance: false,
      subject: "HL3!",
      content: "Accidentally deleted the thumb drive with HL3....oh well!"
    },
    {
      address: "R2D2@theResistance.com",
      importance: true,
      subject: "Death Star Plans",
      content: "Beep beep boop squeeedly wooooo"
    },
    
  ]
  constructor() { }

  ngOnInit() {
  }

}
