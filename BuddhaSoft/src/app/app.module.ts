import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';

import { Ng2Webstorage }    from 'ng2-webstorage';

//Routing
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }     from './app.component';
import { ProductsModule }   from './products/products.module';
import { AddProductModule } from './add-product/add-product.module';
import { DetailsModule }    from './details/details.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ProductsModule,
    AddProductModule,
    DetailsModule,
    Ng2Webstorage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
