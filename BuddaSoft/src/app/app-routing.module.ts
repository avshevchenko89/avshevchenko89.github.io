import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', loadChildren: 'app/products/products.module#ProductsModule' },
  { path: 'product/:id', loadChildren: 'app/details/details.module#DetailsModule' },
  { path: 'new-product', loadChildren: 'app/add-product/add-product.module#AddProductModule' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
