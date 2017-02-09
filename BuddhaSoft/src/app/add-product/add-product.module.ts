import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { HttpModule }          from '@angular/http';

import { NewProductComponent } from './new-product/new-product.component';

// Routing
import { AddRoutingModule }    from './add-routing.module';

import { ProductService }      from '../product.service';

@NgModule({
  imports: [
    CommonModule,
    AddRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ ProductService ],
  declarations: [NewProductComponent]
})
export class AddProductModule { }
