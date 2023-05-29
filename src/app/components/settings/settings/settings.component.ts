import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

isSuccess = false;
  ngOnInit(): void {
  }
  constructor(private api:ApiService,private _snackBar: MatSnackBar) {}

  
  
  form:any={
    newPassword:null,
    Currentpassword:null
  }
  onSubmit(){
    const {Currentpassword,newPassword}=this.form
    console.log(Currentpassword + newPassword)
    this.api.changePassword(newPassword,Currentpassword).subscribe({
      next : data => {
        const message:string = data.message
      if(message.includes("one"))
      {
        this.isSuccess = true;
        this._snackBar.open("Your Password has been changed Successfully !",
        "OK",
        {duration:3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass:'snack'});
      }
      },
      error: () => {
        this.isSuccess = false;
        this._snackBar.open("Wrong Password !","OK",{
          duration:3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass:'snack' });

      }
    })
  }

}
