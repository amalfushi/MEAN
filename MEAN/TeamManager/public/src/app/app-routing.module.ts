import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerNewComponent } from './player-new/player-new.component';
import { PlayerStatusComponent } from './player-status/player-status.component';

const routes: Routes = [
  {path:"", pathMatch:"full", redirectTo: '/players/list'},
  {path:"players", component:LandingComponent, children:[
    {path:"list", component:PlayerListComponent},
    {path:"addPlayer", component:PlayerNewComponent, }
  ]},
  {path: "status", component: PlayerStatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
