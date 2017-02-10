import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { ProductService }      from '../product.service';

import { ProductComponent } from './product/product.component';

// Routing
import { AddRoutingModule }    from './add-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AddRoutingModule,
    FormsModule
  ],
  declarations: [ProductComponent]
})
export class AddProductModule { }
