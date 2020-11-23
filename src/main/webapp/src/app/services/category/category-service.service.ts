import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  localhost = 'http://localhost:8080/';
  constructor(private httpClient: HttpClient) { }

  // tslint:disable-next-line: typedef
  saveCategory(category: any){
    this.httpClient.post(this.localhost + 'createCategory', category).subscribe(
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
  getAllCategory(){
    this.httpClient.get(this.localhost + 'getAllCategory');
  }
}
