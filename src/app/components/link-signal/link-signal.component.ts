import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-link-signal',
  imports: [],
  templateUrl: './link-signal.component.html',
  styleUrl: './link-signal.component.scss'
})
export class LinkSignalComponent {

  firstName= signal<string>("Abhinav");

  lastName= signal<string>( "abhian");

  fullName= linkedSignal({
    source: this.firstName,
    computation:(newVal, preVal)=>{
      const fullName = newVal + " " + this.lastName();
      return fullName;
    }
  }
  )

  user = signal({id:'111', name:"ashik"});
  
  email= linkedSignal({
    source: this.user,
    computation: user=> `${user.name+user.id}@gmail.com`,
    equal: (a:any,b:any) => a.id !== b.id
  })

  changeName(){
    this.firstName.set("John");
  }

  changeEmail(){
    this.user.set({id:'222', name:"ashik"});
  }
}
