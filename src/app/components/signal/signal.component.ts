import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal',
  imports: [FormsModule],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalComponent {

  firstName = signal("Rahul");

  lastName = signal<string>("A P");

  courceName: string = "Angular";

  constructor(){
    const value = this.firstName();
    setTimeout(() => {
      this.courceName = "React";
      this.firstName.set("Ashik");
    }, 5000);
  }
}
