import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [CommonModule],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.scss'
})
export class NgForComponent {

  cityList: string[]= ["pune","kerala","calicut"];
  employeeList: any[] = [
    { empId: 1, empName: "John", empCity: "Pune" },
    { empId: 2, empName: "Smith", empCity: "Kerala" },
    { empId: 3, empName: "Williams", empCity: "Calicut" },
    { empId: 4, empName: "Jones", empCity: "Kerala" },
    { empId: 5, empName: "Brown", empCity: "Calicut" },
    { empId: 6, empName: "Davis", empCity: "Pune" }
  ]
}
