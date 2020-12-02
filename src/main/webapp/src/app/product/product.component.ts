import { AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import {ProductService} from '../services/product/product-service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, AfterViewInit {
  products;
  selectProduct;
  categoryId;
  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.router.events.subscribe(
      (val) => {
        if(val instanceof NavigationEnd ){

          this.categoryId = this.route.snapshot.params.id;

          this.getProducts(+this.categoryId);

        }
      }
    );
    this.categoryId = this.route.snapshot.params.id;
    this.getProducts(this.categoryId);


  }

  ngAfterViewInit(): void {

    console.log('after');
  }

  getProducts(id){

    if(id == 0){

      this.productService.getAllProducts().subscribe(
        (res) => {
          this.products = res;
        },
        (error) => {
          console.log(error);
        }
      );



    }else{

      this.productService.getProductsByCategory(+id).subscribe(
        (res) => {
          this.products = res;
        },
        (error) => {
          console.log(error);
        }
      )
    }


  }

  getProductsBycategory(id){


  }

  onProductDetails(id){
    this.router.navigateByUrl('product/' + id);
  }

}
