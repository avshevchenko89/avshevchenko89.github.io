import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';
import { HttpModule }              from '@angular/http';
import { FormsModule }             from '@angular/forms';

// Routing
import { DetailsRoutingModule}     from './details-routing.module';

import { ProductDetailsComponent } from './product-details/product-details.component';

import { ProductService }          from '../product.service';

@NgModule({
  imports: [
    CommonModule,
    DetailsRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [ ProductService ],
  declarations: [ ProductDetailsComponent ]
})
export class DetailsModule { }
