import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {

  userForm: FormGroup = new FormGroup({
    fName : new FormControl('',[Validators.required]),
    lName : new FormControl('',[Validators.required,Validators.minLength(4)]),
    userName : new FormControl('',[Validators.email]),
    city : new FormControl('',[Validators.required]),
    state : new FormControl('tamilnadu',[Validators.required]),
    zip : new FormControl('',[Validators.required]),
    isAggree: new FormControl(false,[Validators.required]) 
  })

  constructor() { 
    this.userForm.controls['state'].disable();
    setTimeout(() => this.userForm.controls['state'].enable(), 5000);
    const isValid = this.userForm.valid;
  }

  onSubmit(){
    const formValue= this.userForm.value;
    console.log(formValue);
  }



}
