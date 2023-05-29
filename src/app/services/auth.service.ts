import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Router } from '@angular/router';
const AUTH_API = 'http://localhost:8080/api/v1/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient,private router:Router) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'authenticate',
      {
        email,
        password,
      },
      httpOptions
    );
  }


  registerCli(firstname :string,lastname:string, cin:number, email:string, tel:number, password:string,agence:string,address:String): Observable<any> {
    return this.http.post(
      AUTH_API + 'assure/register',
      {
        firstname,
        lastname,
        agence,
        cin,
        email,
        tel,
        address,
        password
      },
      httpOptions
    );
  }

  registerAss(name:string, email:string, tel:number, password:string, address:string, matricule:string): Observable<any> {
    return this.http.post(
      AUTH_API + 'agence/register',
      {
        name,
        address,
        matricule,
        email,
        tel,
        password
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    window.sessionStorage.clear();
    return this.http.post(AUTH_API + 'logout', { }, httpOptions)
  }

}
