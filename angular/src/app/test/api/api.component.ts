import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent {

  private apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getMessages(): Observable<any> {
    return this.http.get(`${this.apiUrl}/hello`);
  }

}
