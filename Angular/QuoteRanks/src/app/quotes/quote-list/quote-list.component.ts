import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from './../quote';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QuoteListComponent implements OnInit {
  @Input() quotes;
  @Output() upvote = new EventEmitter();
  @Output() downvote = new EventEmitter();
  @Output() delete = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  upVote(idx){
    this.upvote.emit(idx);
  }

  downVote(idx){
    this.downvote.emit(idx);
  }

  deleteQuote(idx){
    this.delete.emit(idx);
  }
}
