import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product/product-service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private productService: ProductService, private route: ActivatedRoute) { }
  product;
  ngOnInit(): void {
    this.productService.getProduct(this.route.snapshot.params.id).subscribe(
      (res) => {
        this.product = res;
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
