import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.modules';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { SeattleComponent } from './weather/seattle/seattle.component';
import { SanComponent } from './weather/san/san.component';
import { BurbankComponent } from './weather/burbank/burbank.component';
import { DallasComponent } from './weather/dallas/dallas.component';
import { WashingtonDcComponent } from './weather/washington-dc/washington-dc.component';
import { WeatherService } from './weather.service';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    SeattleComponent,
    SanComponent,
    BurbankComponent,
    DallasComponent,
    WashingtonDcComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
