import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-statement',
  imports: [FormsModule],
  templateUrl: './control-statement.component.html',
  styleUrl: './control-statement.component.scss'
})
export class ControlStatementComponent {
  div1Visible: boolean = false;
  isChecked: boolean = false;
  cityList: string[]=[
    "pune",
    "kerala",
    "calicut"
  ];
  employeeList: any[] = [
    { empId: 1, empName: "John", empCity: "Pune" },
    { empId: 2, empName: "Smith", empCity: "Kerala" },
    { empId: 3, empName: "Williams", empCity: "Calicut" },
  ];
}
