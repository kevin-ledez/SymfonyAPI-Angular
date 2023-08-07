import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  saveUser(inputData: object) {

    return this.httpClient.post(`http://localhost:8000/api/users`, inputData);
  }
}
