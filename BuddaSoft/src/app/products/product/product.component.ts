import { Component, EventEmitter } from '@angular/core';
import { Router }            from '@angular/router';

import { Product }           from '../../product';

@Component({
  selector: 'app-product',
  inputs: ['product'],
  outputs: ['deleteSelected'],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product: Product;
  deleteSelected: EventEmitter<Product>;

  constructor(
    private router: Router
  ) {
    this.deleteSelected = new EventEmitter()
  }

  //show product details
  showDetails(): void {
    this.router.navigate(['/product', this.product.id])
  }

  //create 'delete' event
  delete(product: Product): void {
    this.deleteSelected.emit(product);
  }

}
