import { Injectable }                                 from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ng2-webstorage';

import 'rxjs/add/operator/toPromise';

import { Product }                                    from './product';
import { PRODUCTS }                                   from './data';

@Injectable()
export class ProductService {

  constructor(
    private storage:LocalStorageService) {
  }

  setInitial(): void {
    this.storage.store('products', PRODUCTS);
  }

  // get all products
  getAll(): Promise<Product[]> {
    return Promise.resolve(this.storage.retrieve('products'));
  }

  // get selected product
  getCurrent(id: number): Promise<Product> {
    return this.getAll()
      .then(products =>
        products.find(product => product.id === id))
  }

  // add new product
  add(image: string, productTitle: string, description: string, price: number): Promise<Product> {
    console.log(image);
    return this.getAll().then(products => {
      products.push({
        id: (products.length + 1),
        productTitle: productTitle,
        price: price,
        description: description,
        image: image
      });
      this.storage.store('products', products);
    })
  }

  // delete selected product
  delete(id: number): void {
    this.getAll().then(products => {
      products = products.filter(product => product.id != id);
      this.storage.store('products', products);
    });
  }

  // edit selected product
  update(product: Product): Promise<Product> {
    return this.getCurrent(product.id).then(
      selectedProduct => {
        this.getAll().then(
          products => {
            let ind = products.indexOf(selectedProduct);
            products[ind] = product;
            this.storage.store('products', products);
          }
        )
      }
    ).then(() => product)
  }
}
