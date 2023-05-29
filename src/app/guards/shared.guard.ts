import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class SharedGuard implements CanActivate{
  constructor(private storage:StorageService,private router:Router) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.storage.isLoggedIn() && this.storage.getRole() === 'EXPERT' && this.storage.getRole() === 'ADMIN') {
      
      return true;
    } else {
      this.router.navigate(['/401']);
      return false;
    }
  }

}