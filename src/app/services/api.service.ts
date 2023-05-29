import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs';
import { Agence } from '../modals/Agence';
import { Expert } from '../modals/Expert';
import { User } from '../modals/User';
import { Contrat } from '../shared/Contrat';
import { Contact } from '../shared/contact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private API_URL = 'http://localhost:8080/api/v1';
  constructor(private storageService:StorageService, private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.storageService.getAccessToken()}`
  }),
  params: new HttpParams().append("id",this.storageService.getId())
  };


  httpOption = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.storageService.getAccessToken()}`
    })
  };
 
  
  changePassword( currentpassword:string,newPassword:string): Observable<any> {
    return this.http.post(
      this.API_URL+'/shared/changePassword',
      {
      newPassword,
      currentpassword
      } ,
      this.httpOptions );
  }

  addExpert(name:string, email:string, tel:number, address:string): Observable<any> {
    return this.http.post(
      this.API_URL+'/management/add/expert',
      {
        name,
        email,
        tel,
        address,
        
      } ,
      this.httpOptions );
  }
  uploadFile(file:any){
    return this.http.post<any>(`${this.API_URL}/management/upload`, {file},this.httpOptions );
  }
  
  handleError(e: any) {
    throw new Error('Method not implemented.');
  }
  getAllAgence():Observable<Agence[]> {
    return this.http.get<Agence[]>(this.API_URL+`/admin/agences`, this.httpOption);
  }
  getAllAssure():Observable<User[]> {
    return this.http.get<User[]>(this.API_URL+`/management/users`, this.httpOptions);
  }
  getAllExpert():Observable<Expert[]> {
    return this.http.get<Expert[]>(this.API_URL+`/management/experts`, this.httpOptions);
  }

  activate(id:number):Observable<any> {
    const patchHttpOption = {
      headers: new HttpHeaders({ 
        'Authorization': `Bearer ${this.storageService.getAccessToken()}`
      }),
      params: new HttpParams().append("id",id)
    };
    return this.http.patch(this.API_URL+`/admin/activate`,{id},patchHttpOption)
  }
addContrat(refContrat:string,dateExpiration:Date,activated:boolean,agencyId:number,insuredId:number){
  const HttpOptions = {
    headers: new HttpHeaders({ 
      'Authorization': `Bearer ${this.storageService.getAccessToken()}`
    }),
    params: new HttpParams().append("insuredId",insuredId).append("agencyId",agencyId)
    
}
return this.http.post(this.API_URL+`/management/contrat/add`,{refContrat,dateExpiration,activated,agencyId,insuredId},HttpOptions)
}
getContrat(id:any):Observable<Contrat>{
  const   httpOpt = {
    headers: new HttpHeaders({ 
      'Authorization': `Bearer ${this.storageService.getAccessToken()}`
  }),
  params: new HttpParams().append("insuredId",id)
  };
return this.http.get<Contrat>(this.API_URL+`/management/contrat`,httpOpt)
}

getAllMessages():Observable<Contact[]> {
  return this.http.get<Contact[]>(this.API_URL+`/admin/messages`, this.httpOption);
}


deleteMessage(id:any):Observable<any> {
  return this.http.delete(this.API_URL+`/admin/messages/${id}`, this.httpOption);
}


send(nomComplet:string,email:string,message:string):Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
  })
  };
return this.http.post(this.API_URL+`/contact`,
{
  nomComplet,
  email,
  message
},httpOptions)
}


updateContrat(activated:boolean,insuredId:number){
  const HttpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.storageService.getAccessToken()}`
    })
    
}
return this.http.patch(this.API_URL+`/management/contrat/${insuredId}`,{activated},HttpOptions)
}
update(id:any,email:string,tel:number,address:string,role:string){
  const HttpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.storageService.getAccessToken()}`
    })
    
}
return this.http.patch(this.API_URL+`/shared/update/${id}`,{email,tel,address,role},HttpOptions)
}

}
