import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {

  firstName: string = 'John';
  rollNo: number = 1;
  isActive: boolean = true;
  currentDate: Date = new Date();
  divClassName: string = 'bg-primary';
  seletedCity: string = '';


  constructor() {
    console.log(this.firstName);
  }

  showWelcomeMessage(){
    alert('Welcome  '+ this.firstName);
  }

  onCityChange(){
    console.log('City changed');
  }


}