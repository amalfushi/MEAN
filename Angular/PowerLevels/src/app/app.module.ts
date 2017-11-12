import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PowerComponent } from './power/power.component';
import { FormsModule } from '@angular/forms';
import { HumanComponent } from './power/human/human.component';
import { SaiyanComponent } from './power/saiyan/saiyan.component';
import { SuperSaiyanComponent } from './power/super-saiyan/super-saiyan.component';
import { SuperSaiyan2Component } from './power/super-saiyan-2/super-saiyan-2.component';
import { SuperSaiyan3Component } from './power/super-saiyan-3/super-saiyan-3.component';
import { SuperSaiyan4Component } from './power/super-saiyan-4/super-saiyan-4.component';


@NgModule({
  declarations: [
    AppComponent,
    PowerComponent,
    HumanComponent,
    SaiyanComponent,
    SuperSaiyanComponent,
    SuperSaiyan2Component,
    SuperSaiyan3Component,
    SuperSaiyan4Component,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }