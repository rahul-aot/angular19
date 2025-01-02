import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgressBarComponent } from "../../reusable/progress-bar/progress-bar.component";

@Component({
  selector: 'app-admin',
  imports: [RouterLink, ProgressBarComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
