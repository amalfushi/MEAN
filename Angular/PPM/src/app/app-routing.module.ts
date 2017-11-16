import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './home/product-list/product-list.component';
import { ProductEditComponent } from './home/product-edit/product-edit.component';
import { ProductNewComponent } from './home/product-new/product-new.component';

const routes: Routes = [
  {path: "", pathMatch: "full", component: HomeComponent},
  {path: "products", component: ProductListComponent},
  {path: "products/new", component: ProductNewComponent},
  {path: "products/edit/:id", component: ProductEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
