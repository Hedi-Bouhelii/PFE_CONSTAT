// import { HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient, private storageService:StorageService) { }
  //private params = new HttpParams().set('id', this.id);
  private uploadUrl = `http://localhost:8080/api/v1/management/upload`


  upload(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.storageService.getAccessToken()}`
      }),
      params: new HttpParams().set('id', this.storageService.getId()),
      reportProgress: true
    };
  
    return this.http.post(this.uploadUrl, formData, httpOptions);
  }
  
  handleError(e: any) {
    throw new Error('Method not implemented.');
  }



}