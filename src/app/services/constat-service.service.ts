import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constat } from '../shared/Constat';
import { Observable } from 'rxjs';
const CONSTAT_API = 'http://localhost:8080/api/v1/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ConstatServiceService {

  constructor(private http: HttpClient) {}
  
  createConstat(constat:Constat){
    // return this.http.post(
    //   CONSTAT_API + 'createConstat',
    //   {
    //     constat
    //   },
    //   httpOptions
    // );
    console.log(constat);
  }
  createIntervenant(listIntervenant:any,id:any){
    // return this.http.post(
    //   CONSTAT_API + `createIntervenant/${id}`,
    //   {
    //     listIntervenant
    //   },
    //   httpOptions
    // );
    for (const intervenant of listIntervenant){
      if (intervenant.type == 'person'){
        for (const person of intervenant.list){
          console.log('person : ',person)
      }
      }
      else {
        for (const vehicule of intervenant.list){
          console.log('vehicule : ',vehicule)
        }
      }
      }
  }
}
