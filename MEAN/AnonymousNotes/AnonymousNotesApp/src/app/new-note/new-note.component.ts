import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NotesService } from "./../notes.service";

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewNoteComponent implements OnInit {

  note={};

  constructor(private _notesService:NotesService) {
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.note)
    this._notesService.newNote(this.note, (note)=>{
      this.note = "";
    });
  }
}
