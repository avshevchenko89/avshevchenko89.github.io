import { Component, OnInit } from '@angular/core';

import { Product }           from '../../product';
import { ProductComponent }  from '../product/product.component';

import { ProductService }    from '../../product.service';

@Component({
  selector: 'app-product-list',
  providers: [ ProductService ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[];
  alert: boolean;
  selectedProduct: Product;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
    this.alert = false;
  }

  //get list of all products
  getProducts(): void {
    this.productService.getAll().then(products => this.products = products);
  }

  //alert after clicking 'delete' button
  showAlert(product: Product): void {
    this.selectedProduct = product;
    this.alert = true;
  }

  //cancel 'delete'
  noDelete(): void {
    this.alert = false;
  }

  //submit 'delete'
  delete(): void {
    this.productService.delete(this.selectedProduct.id);
    this.alert = false;
    this.products = this.products.filter(product => product !== this.selectedProduct);
  }
}
