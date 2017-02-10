import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductService }          from '../product.service';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';

// Routing
import { ProductsRoutingModule }   from './products-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  declarations: [
    ProductListComponent,
    ProductComponent
  ]
})
export class ProductsModule { }
