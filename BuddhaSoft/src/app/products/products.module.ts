import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';

import { ProductsListComponent }   from './products-list/products-list.component';
import { ProductComponent }        from './product/product.component';

// Routing
import { ProductsRoutingModule }   from './products-routing.module';

import { ProductService }          from '../product.service';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  declarations: [
    ProductsListComponent,
    ProductComponent
  ],
  providers: [ ProductService ]
})

export class ProductsModule { }
