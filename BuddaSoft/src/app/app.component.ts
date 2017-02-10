import { Component } from '@angular/core';

import { ProductService }    from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ProductService ]
})
export class AppComponent {
  title = 'BuddhaSoft test task';

  constructor(
    private productService: ProductService
  ) {}

  //initialize initial data to local storage
  ngOnInit(): void {
    this.productService.setInitial();
  }
}
