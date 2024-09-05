import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { MatButtonModule } from '@angular/material/button';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
import { Worker} from '../../models/worker.model';

@Component({
  selector: 'app-worker-list',
  standalone: true,
  imports: [CommonModule, FormsModule],//,MatButtonModule , MatFormFieldModule,MatInputModule,],
  templateUrl: './worker-list.component.html',
  styleUrl: './worker-list.component.css'
})
export class WorkerListComponent implements OnInit{

  workers: Worker[] = [];
  message: string="";

  constructor(private http: HttpService){}
  
  ngOnInit(): void {
    debugger
    this.http.getWorkerList().subscribe(res=>this.workers=res);
  }

  sendMessage()
  {

  }

}
