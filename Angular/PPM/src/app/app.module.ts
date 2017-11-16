import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductNewComponent } from './home/product-new/product-new.component';
import { ProductListComponent } from './home/product-list/product-list.component';
import { ProductEditComponent } from './home/product-edit/product-edit.component';
import { ProductService } from './product.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductNewComponent,
    ProductListComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
