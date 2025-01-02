import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginObj: any = {
    user: '',
    password: ''
  }

  router= inject(Router);

  login(){
    
    if(this.loginObj.user === 'admin' && this.loginObj.password === 'admin'){
      this.router.navigateByUrl('/admin');
    }
    else{
      alert('Invalid credentials');
    }
  }
}
