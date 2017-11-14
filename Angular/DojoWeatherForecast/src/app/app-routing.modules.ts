import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { WeatherComponent } from './weather/weather.component';
import { SeattleComponent } from './weather/seattle/seattle.component';
import { DallasComponent } from './weather/dallas/dallas.component';
import { SanComponent } from './weather/san/san.component';
import { BurbankComponent } from './weather/burbank/burbank.component';
import { WashingtonDcComponent } from './weather/washington-dc/washington-dc.component';

const routes: Routes = [
    {path: "", pathMatch: "full", component: WeatherComponent},
    {path: "seattle", component: SeattleComponent},
    {path: "dallas", component: DallasComponent},
    {path: "sanjose", component: SanComponent},
    {path: "burbank", component: BurbankComponent},
    {path: "washington-dc", component: WashingtonDcComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }