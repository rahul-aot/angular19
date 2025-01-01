import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.scss'
})
export class GetApiComponent {

  users: any[] = [];
  productList: any[] = [];
  constructor(private http: HttpClient){

  }

  getUsers(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{
      console.log(res);
      this.users = res
    })
  }

  getProducts(){
    this.http.get('https://fake-store-api.mock.beeceptor.com/api/products').subscribe((res:any)=>{
      console.log(res);
      this.productList = res;
    })
  }
}
