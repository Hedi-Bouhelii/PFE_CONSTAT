import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AssureGuard implements CanActivate{
  constructor(private storage:StorageService,private router:Router) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isLoggedIn = this.storage.isLoggedIn() ;
    const role = this.storage.getRole();
    if (isLoggedIn && role === 'ASSURE') {
      console.log(role)
      return true;
    } else {
      this.router.navigate(['/401']);
      return false;
    }
  }

}