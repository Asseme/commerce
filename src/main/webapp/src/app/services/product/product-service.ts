import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService{
  getProducts() {
    throw new Error('Method not implemented.');
  }

  localhost = 'http://localhost:8080/';
  constructor(private httpClient: HttpClient) { }

  // tslint:disable-next-line: typedef
  saveCategory(category: any){
    this.httpClient.post(this.localhost + 'createProduct', category).subscribe(
      () => {
        console.log('Enregistré!');
      },
      (error)=>{
        console.log(error);
      }
    )
    ;
  }
  // tslint:disable-next-line: typedef
  getAllProducts(){
    return this.httpClient.get(this.localhost + 'products');
  }

  getProduct(id){
    return this.httpClient.get(this.localhost + 'product/' + id);
  }

  getProductsByCategory(id){
    return this.httpClient.get(this.localhost + 'productsByCategory/' + id);
  }

  getProductPhoto(id){
    return this.localhost + 'productPhoto/' + id;
  }

  getProductByKeyWord(mc){
    return this.httpClient.get(this.localhost + 'searchProducts/' + mc);
  }
}
