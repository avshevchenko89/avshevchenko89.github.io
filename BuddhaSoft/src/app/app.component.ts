import { Component, OnInit } from '@angular/core';

import { ProductService }    from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BuddhaSoft test task';

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productService.setInitial(); //initialize initial data to local storage
  }
}
