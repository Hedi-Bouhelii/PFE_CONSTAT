import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

const FORGOT_API = 'http://localhost:8080/api/v1/forgot/'

  
@Injectable({
  providedIn: 'root'
})
export class ForgotService {
  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
  })
  };
  constructor(private http: HttpClient, private storage :StorageService) {}


  forgot(email:string):Observable<any>{
    return this.http.post(FORGOT_API + 'recovery',{
      email
    },
    this.httpOptions)
  }

  sendReset(token:string,password:string):Observable<any>{
    return this.http.post(FORGOT_API + 'reset' ,{
      
      token,
      password
    },
    this.httpOptions)
  }
}
