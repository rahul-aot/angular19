import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.scss'
})
export class TemplateFormComponent {

  userObj: any = {
    firstName: '',
    lastName: '',
    userName: '',
    city: '',
    state: 'karnataka',
    zip: '',
    isTermsAggree: false,
  };

  onSubmit(){
    const formValue= this.userObj;
    console.log(formValue);
  }
}
