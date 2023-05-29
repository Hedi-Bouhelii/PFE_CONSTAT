import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private authService:AuthService,private router:Router, private _snackBar: MatSnackBar) { }
  selectedOption: any;
  isSuccessful =false;
  errorMessage="error";
  isSignUpFailed =false;
  formAssure: any = {
    firstname:null,
    lastname:null,
    cin:null,
    email: null,
    tel:null,
    password: null,
    agence:null,
    address:null
  };
    formAssurance:any ={
    name:null,
    email:null,
    tel:null,
    matricule:null,
    address:null,
    password:null,
  }


  ngOnInit(): void {
  }
  onSubmitAssure(){
    const { firstname, lastname, address, cin, email, phone, password,agence } = this.formAssure;
    console.log(this.formAssure)
    this.authService.registerCli(firstname, lastname, cin, email, phone ,password,agence,address)
      .subscribe({
        next: () => {
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this._snackBar.open("Votre Compte a été créee avec succes ",
        "OK",
        {duration:3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass:'snack'});

          this.router.navigate(['/login']);
        },
        error: (err) => {
          this._snackBar.open("Creation Echoué ","OK",{
            duration:3000 ,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: 'snack'});
          console.error(err);
          this.isSignUpFailed = true;
          this.errorMessage = err.error?.message ?? 'Something went wrong';
          
        }
      });
  }
  onSubmitAssurance(){
    const {name,email, tel, address, password,matricule}=this.formAssurance
    this.authService.registerAss(name, email, tel, password,address,matricule)
    .subscribe({
      next: (response) => {
        console.log(response); // <-- handle the response as text
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error(err);
        this.isSignUpFailed = true;
        this.errorMessage = err.error?.message ?? 'Something went wrong';
      }
    });
  }
}
