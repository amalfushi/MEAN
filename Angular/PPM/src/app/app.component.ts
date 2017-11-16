import { Component } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  products = [
    new Product(1, "DSLR Camera", 1499.99, null),
    new Product(2, "Laptop", 1299.99, null),
  ]

  constructor(private _productService: ProductService){
    this._productService.updateProducts(this.products);
    this._productService.productsObservable.subscribe((products)=>{
      this.products = products;
    });
  }
}
