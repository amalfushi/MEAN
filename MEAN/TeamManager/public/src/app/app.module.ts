import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerNewComponent } from './player-new/player-new.component';
import { PlayerStatusComponent } from './player-status/player-status.component';
import { PlayerEditComponent } from './player-edit/player-edit.component';
import { LandingComponent } from './landing/landing.component';
import { PlayerService } from './player.service';



@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    PlayerNewComponent,
    PlayerStatusComponent,
    PlayerEditComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
