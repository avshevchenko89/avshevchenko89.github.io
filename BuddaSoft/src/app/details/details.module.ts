import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }             from '@angular/forms';

import { ProductService }          from '../product.service';

import { ProductDetailsComponent } from './product-details/product-details.component';

// Routing
import { DetailsRoutingModule}     from './details-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DetailsRoutingModule
  ],
  declarations: [ProductDetailsComponent]
})
export class DetailsModule { }
