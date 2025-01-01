import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer',
  imports: [FormsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent {

  customerObj: any = {
    "customerId": 0,
    "customerName": "",
    "customerCity": "",
    "mobileNo": "",
    "email": ""
  }

  customerArray : any[] =[];

  constructor(private custSrv: CustomerService){
    this.getCustomers()
  }



  // getCustomers(){
  //   this.http.get('https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCustomers').subscribe((res : any) => {
  //     console.log(res.data);
  //     this.customerArray = res.data;
  //   })
  // }

  getCustomers(){
    this.custSrv.loadCustomers().subscribe((res : any) => {
      console.log(res.data);
      this.customerArray = res.data;
    })
  }

  onSaveCustomer(){
    debugger
    this.custSrv.createNewCustomer(this.customerObj).subscribe((res: any) => {
      console.log(res);
      debugger
      if(res.result){
        alert("Customer Successfully Created");
        this.getCustomers();
      }
      else{
        alert(res.message);
      }
      })
  }
}
