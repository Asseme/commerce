import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from './services/category/category-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'webapp';

  categories;
  products;
  mc: string = "";
  constructor(private categoryService: CategoryService, private router: Router ) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(){
    this.categoryService.getAllCategories().subscribe(
      (res) => {
        this.categories = res;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  getProductByCategory(c){
    this.router.navigate(['productsByCategory/',c.id]);
  }


  getProductByKeyword(mc){
    this.router.navigate(['searchResult/', mc])
    console.log(mc)
  }


  getProducts(id){
    this.router.navigate(['productsByCategory/',id]);
  }
}
