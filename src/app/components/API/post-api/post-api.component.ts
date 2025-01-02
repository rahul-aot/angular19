
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.scss'
})
export class PostApiComponent implements OnInit {

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


  ngOnInit(): void {
    this.getAllCars();
  }

  // ngAfterViewInit(): void {
  //   console.log("ngAfterViewInit",performance.now());
  //   // for perfomace calculations, it willl show how much time is taken to load the html 
  // }
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
        alert("CarRentalApp Successfully Created");
        this.getAllCars();
      }
      else{
        alert(res.message);
      }
    })
  }
}
