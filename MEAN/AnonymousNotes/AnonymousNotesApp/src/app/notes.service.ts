import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class NotesService {

  notes;

  constructor(private _http:Http) { }

  newNote(note, callback){
    // console.log(note)
    this._http.post("/new", note).subscribe(
      (response)=>{
       callback(response.json());
      },
      (err)=>{
        console.log(err.json());
      }
    );
  }

  getNotes(callback){
    this._http.get("/all").subscribe(
      (response)=>{ 
        callback(response.json())
      },
      (error)=> { console.log("Could not retrieve notes from backend") }
    );
  }
  

}
