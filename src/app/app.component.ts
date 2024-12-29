import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgStyleComponent } from "./components/ng-style/ng-style.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgStyleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular19';
}
