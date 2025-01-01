
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-post-api',
  imports: [],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.scss'
})
export class PostApiComponent {

  http = inject(HttpClient);

  carData : any[] = [];

  getAllCars(){
    this.http.get('https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars').subscribe((res:any)=>{
      console.log(res.data);
      this.carData = res.data;
    })
  }
}
