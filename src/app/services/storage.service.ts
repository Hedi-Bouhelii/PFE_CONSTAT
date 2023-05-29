import { Injectable } from '@angular/core';
const USER_KEY = 'user';
const AGENCE = "agence";
const EXPERT = "expert";
const ADMIN = "admin";
const ACCESS_TOKEn ='access_token';
const RESPONSE = 'all';
const RESET='token';
const ROLE = "role";
const ID = "id";
const userId = "userId";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  static isLoggedIn() {
    throw new Error('Method not implemented.');
  }
  constructor() { }

  public saveAgence(user: any): void {
    window.sessionStorage.removeItem(AGENCE);
    window.sessionStorage.setItem(AGENCE, JSON.stringify(user));
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  public saveExpert(user: any): void {
    window.sessionStorage.removeItem(EXPERT);
    window.sessionStorage.setItem(EXPERT, JSON.stringify(user));
  }
  public saveAdmin(user: any): void {
    window.sessionStorage.removeItem(ADMIN);
    window.sessionStorage.setItem(EXPERT, JSON.stringify(user));
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    const agence = window.sessionStorage.getItem(AGENCE);
    const expert = window.sessionStorage.getItem(EXPERT);

    if (user || expert || agence) {
      return true;
    }
    return false;
  }

  public getUser(): any {
    const user =window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
  }

  public saveToken(token: any): void {
    window.sessionStorage.removeItem(ACCESS_TOKEn);
    window.sessionStorage.setItem(ACCESS_TOKEn, JSON.stringify(token));
  }


  public saveRole(role: any): void {
    window.sessionStorage.removeItem(ROLE);
    window.sessionStorage.setItem(ROLE, JSON.stringify(role));
  }
  public saveID(id: any): void {
    window.sessionStorage.removeItem(id);
    window.sessionStorage.setItem(ID, JSON.stringify(id));
  }


  clean(): void {
    window.sessionStorage.clear();
  }


  public getAgence(): any {
    const user =window.sessionStorage.getItem(AGENCE);
    console.log(user)
    if (user) {
      return JSON.parse(user);
    }
  }
  


  public getRole(): string {
    const role = window.sessionStorage.getItem(ROLE);
   if (role) {
    return JSON.parse(role);
   }
   return '';
  }
  public getId(): number {
    const id = window.sessionStorage.getItem(ID);
   if (id) {
    return JSON.parse(id);
   }
   return NaN;
  }
  public saveId(id: any): void {
    window.sessionStorage.removeItem(id);
    window.sessionStorage.setItem(userId, JSON.stringify(id));
  }
  public getUserId(): number {
    const id = window.sessionStorage.getItem(userId);
   if (id) {
    return JSON.parse(id);
   }
   return NaN;
  }

  

  public getExpert(): any {
    const user =window.sessionStorage.getItem(EXPERT);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
  getAdmin():any {
    const admin =window.sessionStorage.getItem(ADMIN);
    if (admin) {
      return JSON.parse(admin);
    }

    return {};
  }
  getAccessToken():any {
    const token =window.sessionStorage.getItem(ACCESS_TOKEn);
    if (token) {
      return JSON.parse(token);
    }

    return {};
  }


  
}
