import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Product }                from '../../product';
import { ProductService }         from '../../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  editMode: boolean;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.forEach((params:Params) => {
      let id = +params['id'];
      this.productService.getCurrent(id)
        .then(product => this.product = product);
    });
    this.editMode = false;
  }

  goBack(): void {
    this.location.back();
  }

  edit(): void {
    this.editMode = true;
  }

  save(): void {
    this.productService.update(this.product)
      .then(() => this.goBack());
  }
}
