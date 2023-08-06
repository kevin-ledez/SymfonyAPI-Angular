import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  apiUrl = 'http://localhost:8000/api/users';

  getAll(){
    return this.http.get(this.apiUrl);
  }
  // Getbycode(code:any){
  //   return this.http.get(this.apiUrl + '/' + code);
  // }

  // Envoi des données d'inscription de l'utilisateur à l'API
  Proceedregister(inputdata: any) {
    return this.http.post(this.apiUrl, inputdata);
  }

  Updateuser(code: any,inputdata: any) {
    return this.http.put(this.apiUrl + '/' + code, inputdata);
  }

}

