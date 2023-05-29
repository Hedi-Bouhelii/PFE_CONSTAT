import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private StorageService :StorageService,private authService:AuthService, private _snackBar: MatSnackBar) { }
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  role = "";

  ngOnInit(): void {
    if (this.StorageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.role = this.StorageService.getUser().role;
    }
  }
  onSubmit(){
    const { email, password } = this.form;  
    console.log(email, password);
    this.authService.login(email, password).subscribe({
      next: data => {
        const accessToken = data.access_token;
        const user = data.user;
        const expert = data.expert;
        const agence = data.agence;
        const admin = data.Role
        const id = data.id;
        this.StorageService.saveID(id);
        console.log(data)
        if(data.Role === "ASSURE"){
          this.StorageService.saveUser(user);
          this.StorageService.saveRole(data.Role);
          this.StorageService.saveToken(accessToken);
          sessionStorage.removeItem('token');
          console.log('yeyyyy')
        }
        if(data.Role === "AGENCE"){
          this.StorageService.saveAgence(agence);
          this.StorageService.saveRole(data.Role);
          this.StorageService.saveToken(accessToken);
          sessionStorage.removeItem('token');
        }
        if(data.Role === "EXPERT"){
          this.StorageService.saveExpert(expert);
          this.StorageService.saveRole(data.Role);
          this.StorageService.saveToken(accessToken);
          sessionStorage.removeItem('token');
        }
        if(data.Role === "ADMIN"){
          this.StorageService.saveAdmin(admin);

          this.StorageService.saveRole(data.Role);
          this.StorageService.saveToken(accessToken);
          sessionStorage.removeItem('token');
        }
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.role = data.Role;
        this._snackBar.open("Vous etes connecte, bienvenue "+ data.Role,
        "OK",
        {duration:3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass:'snack'});
        this.reloadPage();
      },
      error: err => {
        this.isLoginFailed = true;
        this._snackBar.open("Email ou mot de passe errone","OK",{
          duration:3000 ,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: 'snack'});
      }
    });
  }
  reloadPage(): void {
    window.location.reload();
  }
}
