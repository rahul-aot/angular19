import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-api',
  imports: [FormsModule],
  templateUrl: './delete-api.component.html',
  styleUrl: './delete-api.component.scss'
})
export class DeleteApiComponent {

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
            alert("CarRentalApp Successfully Created");
            this.getAllCars();
          }
          else{
            alert(res.message);
          }
        })
      }
  
      editCar(data : any){
        this.carObj = data;
      }
  
      updateCar(){
        this.http.put('https://freeapi.miniprojectideas.com/api/CarRentalApp/UpdateCar', this.carObj).subscribe((res:any)=>{
          console.log(res);
          if(res.result){
            alert("Successfully Updated");
            this.getAllCars();
          }
          else{
            alert(res.message);
          }
        })
      }

      deleteCar(id : number){
        const isDelete = confirm("Are you sure you want to delete this car?");
        if(isDelete == true){
          this.http.delete(`https://freeapi.miniprojectideas.com/api/CarRentalApp/DeleteCarbyCarId?carid=${id}`).subscribe((res:any)=>{
            console.log(res);
            if(res.result){
              alert("Successfully Deleted");
              this.getAllCars();
            }
            else{
              alert(res.message);
            }
          })

        }
      }
}
