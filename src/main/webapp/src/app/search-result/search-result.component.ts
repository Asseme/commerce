import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ProductService } from '../services/product/product-service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  products;
  mc;
  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.events.subscribe(
      (val) => {
        if(val instanceof NavigationEnd ){

          this.mc = this.route.snapshot.params.mc;

          this.getProductByKeyword(this.mc);

        }
      }
    );
    this.mc = this.route.snapshot.params.mc;
    this.getProductByKeyword(this.mc);

  }

  getProductByKeyword(mc){
    this.productService.getProductByKeyWord(mc).subscribe(
      (res) => {
        this.products = res;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  getProductPhoto(id){

    return this.productService.getProductPhoto(id);
  }
}
