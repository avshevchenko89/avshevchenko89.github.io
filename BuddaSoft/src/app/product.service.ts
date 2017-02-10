import { Injectable }          from '@angular/core';

import { Product }             from './product';
import { PRODUCTS }            from './data';

@Injectable()
export class ProductService {

  constructor(
  ) { }

  setInitial(): void {
    localStorage.setItem('products', JSON.stringify(PRODUCTS));
  }

  // get all products
  getAll(): Promise<Product[]> {
    return Promise.resolve(JSON.parse(localStorage.getItem('products')));
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
      localStorage.setItem('products', JSON.stringify(products));
    })
  }

  // delete selected product
  delete(id: number): void {
    this.getAll().then(products => {
      products = products.filter(product => product.id != id);
      localStorage.setItem('products', JSON.stringify(products));
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
            localStorage.setItem('products', JSON.stringify(products));
          }
        )
      }
    ).then(() => product)
  }
}
