import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Worker } from '../models/worker.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl = `${environment.apiUrl}/organization`;

  constructor(private http: HttpClient) {}

//   saveBookmark(userId: string, repository: Worker): Observable<any> {
//     const body = { userId, repository };
//     return this.http.post(`${this.apiUrl}/save`, body);
//   }

  getWorkerList(): Observable<any[]> {
    const url = `${this.apiUrl}/getWorkerList`;
    return this.http.get<any[]>(url);
  }
}
