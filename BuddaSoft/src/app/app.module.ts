import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';

import { AppComponent }     from './app.component';
import { ProductsModule }   from './products/products.module';
import { AddProductModule } from './add-product/add-product.module';
import { DetailsModule }    from './details/details.module';

import { ProductService }   from './product.service';

//Routing
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ProductsModule,
    AddProductModule,
    DetailsModule,
    AppRoutingModule
  ],
  providers: [ ProductService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
