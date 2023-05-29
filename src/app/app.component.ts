import { Component } from '@angular/core';
import { StorageService } from './services/storage.service';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'main-front-pfe';
  role= "";
  isLoggedIn = false;
  showAgenceBoard = false;
  showModeratorBoard = false;
  showUserBoard= false;
  showHome = false;
  showAdminBoard = false;
  firstName?: string;
  name?: string;
  email?: string;
  selectedValue:any
  constructor(private storageService: StorageService, private authService: AuthService,private router:Router) { }


  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    if (this.isLoggedIn) {
      this.role = this.storageService.getRole();
      console.log(this.role)

      if (this.role == "ASSURE"){
        const user = this.storageService.getUser();
        this.firstName= user.firstName;
        this.showUserBoard = true;
        this.router.navigate(['/user'])
      }

      if (this.role == "AGENCE"){
        const user = this.storageService.getAgence();
        this.name= user.name;
        this.showAgenceBoard = true;
        this.router.navigate(['/agence'])
      }
      if (this.role == "ADMIN"){
        this.showHome = true;
        const user = this.storageService.getAdmin();
        this.email = user.email;
        this.showAdminBoard = true
        this.router.navigate(['/admin'])
      }
      
      if (this.role == "EXPERT"){
        const user = this.storageService.getExpert();
        this.name= user.name;
        this.showModeratorBoard = true;
        this.router.navigate(['/expert'])

      }
    }
  }
  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }

}
