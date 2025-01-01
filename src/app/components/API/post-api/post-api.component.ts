
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.scss'
})
export class PostApiComponent {

  http = inject(HttpClient);
  carObj: any ={
    "carId": 0,
    "brand": "",
    "model": "",
    "year": "",
    "color": "",
    "dailyRate": "",
    "carImage": "",
    "regNo": ""
  }
  carData : any[] = [];

  getAllCars(){
    this.http.get('https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars').subscribe((res:any)=>{
      console.log(res.data);
      this.carData = res.data;
    })
  }

  saveCar(){
    this.http.post('https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCar', this.carObj).subscribe((res:any)=>{
      console.log(res);
      if(res.result){
        alert(res.message);
        this.getAllCars();
      }
      else{
        alert(res.message);
      }
    })
  }
}
