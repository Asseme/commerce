import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product/product-service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getAllProducts().subscribe(
      (res) => {
        this.products = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
