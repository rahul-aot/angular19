import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {

  userForm: FormGroup = new FormGroup({
    fName : new FormControl(''),
    lName : new FormControl(''),
    userName : new FormControl(''),
    city : new FormControl(''),
    state : new FormControl('tamilnadu'),
    zip : new FormControl(''),
    isAggree: new FormControl(false) 
  })

  onSubmit(){
    const formValue= this.userForm.value;
    console.log(formValue);
  }
}
