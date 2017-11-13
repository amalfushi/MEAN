import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class QuotesComponent implements OnInit {
  quote = new Quote();
  quotes = [
    {quote_text: "This is for science!", author: "GLaDos", rank:33},
    {quote_text: "Squeedly wooOO!", author: "Jimmy Hendrix", rank:150},
    {quote_text: "Mien Kampf is the best book", author: "Hitler", rank:-300}
  ];
  constructor() { }

  ngOnInit() {
  }

  addQuote(){
    this.quotes.push(this.quote);
    this.quote = new Quote();
  }

  upVote($event){
    this.quotes[$event].rank ++;
  }

  downVote($event){
    this.quotes[$event].rank --;
  }

  deleteQuote($event){
    console.log($event)
    this.quotes.splice($event,1);
  }
}
