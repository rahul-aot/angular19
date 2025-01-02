import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgressBarComponent } from "../../reusable/progress-bar/progress-bar.component";
import { TabsComponent } from "../../reusable/tabs/tabs.component";

@Component({
  selector: 'app-admin',
  imports: [RouterLink, ProgressBarComponent, TabsComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  adminTabs: string[] = ["Basic Info", "Plan Info", "Payment Info"];
}
