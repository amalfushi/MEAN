import { Injectable } from '@angular/core';
import { Product } from './product';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ProductService {
  productsObservable = new BehaviorSubject(null);

  constructor() { }

  updateProducts(products) {
    console.log(products);
    this.productsObservable.next(products);
  }

}
