import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from '../../product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductEditComponent implements OnInit {
  products: Array<Product>;
  product: Product;

  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductService,
    private _router: Router
  ) {
    this._productService.productsObservable.subscribe(
      (products) => { this.products = products });
    this._route.params.subscribe(param=>{
      for (let idx = 0; idx < this.products.length; idx++) {
        if (this.products[idx].id == param.id){
          this.product = this.products[idx];
          break;
        }
      }
    });
  }

  ngOnInit() {
  }

  update(){
    this._productService.updateProducts(this.products);
    this._router.navigate(['/products']);
  }
}
