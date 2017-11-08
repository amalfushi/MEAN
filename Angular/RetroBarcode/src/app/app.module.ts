import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BarcodeGeneratorComponent } from './barcode-generator/barcode-generator.component';


@NgModule({
  declarations: [
    AppComponent,
    BarcodeGeneratorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
