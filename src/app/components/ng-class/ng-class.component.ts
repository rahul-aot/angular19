import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-class',
  imports: [CommonModule,FormsModule],
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.scss'
})
export class NgClassComponent {
  
  divBgColor: string = 'bg-success';
  isChecked: boolean = false;
  div3ClassName: string = 'bg-primary';


  addDivBgColor(className: string): void {
    this.divBgColor = className
  }
}
