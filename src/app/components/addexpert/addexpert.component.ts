import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-addexpert',
  templateUrl: './addexpert.component.html',
  styleUrls: ['./addexpert.component.scss']
})
export class AddexpertComponent implements OnInit {

  constructor(private apiService: ApiService,private router:Router,private storage: StorageService, private _snackBar: MatSnackBar) { }
  form: any = {
    name:null,
    email: null,
    tel:null,
    address: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  ngOnInit(): void {
    console.log(this.storage.getAccessToken())
  }
  onSubmit(): void {
    const {name, email, tel, address } = this.form;
    console.log(this.form)
    this.apiService.addExpert(name, email, tel, address).subscribe({
        next: data => {
          this._snackBar.open("Expert crée avec succes",
        "OK",
        {duration:3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass:'snack'});
          this.reloadPage();
        },
        error: (err) => {
          console.error(err);
          this.isSignUpFailed = true;
          this._snackBar.open("Creation Echoué","OK",{
            duration:3000 ,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: 'snack'});
        }
      }
  )}
reloadPage(){
  window.location.reload()
}
}
