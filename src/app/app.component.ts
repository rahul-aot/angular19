import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBindingComponent } from "./components/data-binding/data-binding.component";
import { NgIfComponent } from "./components/ng-if/ng-if.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DataBindingComponent, NgIfComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular19';
}
