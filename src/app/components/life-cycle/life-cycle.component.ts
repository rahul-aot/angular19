import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.scss'
})
export class LifeCycleComponent implements OnInit,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked, OnDestroy{


  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void{
    console.log('ngOnInit');
    // api call
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');

    // view child , getting reference of element
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    // when user navigate to another page 
  }
}
