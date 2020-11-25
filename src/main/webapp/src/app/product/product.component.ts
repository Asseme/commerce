import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProductService} from '../services/product/product-service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products;
  selectProduct;

  constructor(private productService: ProductService, private router: Router) { }

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

  onProductDetails(id){
    this.router.navigateByUrl('product/' + id);
  }

}
