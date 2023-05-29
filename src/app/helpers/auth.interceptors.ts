// import { Injectable } from '@angular/core';
// import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { StorageService } from '../services/storage.service';
// const TOKEN_HEADER_KEY = 'Authorization';

// @Injectable()
// export class HttpRequestInterceptor implements HttpInterceptor {

//   constructor(private storage: StorageService){}

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
//     req = req.clone({
//       setHeaders: {
//         Authorization: `Bearer ${this.storage.getAccessToken()}`
//       }
//     });
//     return next.handle(req);
//   }
//   }

// export const httpInterceptorProviders = [
//   { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
// ];
