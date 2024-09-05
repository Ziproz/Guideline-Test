import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { WorkerListComponent } from './components/worker-list/worker-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, WorkerListComponent],
  // SpinnerComponent
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'guidelineTestClient';
}
