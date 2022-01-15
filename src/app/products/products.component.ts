import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input('product') products: Product[];

  constructor(private productservice: ProductService) { }

  ngOnInit() {
    this.products = this.productservice.getProducts();
  }

}
