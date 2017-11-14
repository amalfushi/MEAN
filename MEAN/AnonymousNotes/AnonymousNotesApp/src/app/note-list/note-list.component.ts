import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NotesService } from './../notes.service'

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NoteListComponent implements OnInit {

  notes=[];

  constructor(private _notesService: NotesService) { 
    this._notesService.getNotes((notes)=>{
      this.notes = notes;
      console.log(this.notes);
    });
  }

  ngOnInit() {
  }

}
