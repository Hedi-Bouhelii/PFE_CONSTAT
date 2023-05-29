import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ForgotService } from 'src/app/services/forgot.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  sent:boolean =false
  form:any={
    email:null
  }
  formReset:any={
    token:null,
    password:null
  }
  constructor(private forgot:ForgotService, private _snackBar: MatSnackBar, private router: Router) { }
  onSend(){
    const email= this.form.email; 
    this.forgot.forgot(email).subscribe({
      next:(reset) =>{
        console.log(typeof(reset))
        if(reset.message.includes('Done'))
      {
        this.sent = true;
        this._snackBar.open("Un email a ete envoye a "+email,
        "OK",
        {duration:3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass:'snack'});
      }
      },
      error:(err) =>{
        console.error('An error occurred:', err);  
        this.sent=false;
        this._snackBar.open("Email Errone","OK",{
          duration:3000 ,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: 'snack'});
      }
    })
  }
  onReset(){
    const token = this.formReset.token
    const password = this.formReset.password
      this.forgot.sendReset(token, password).subscribe({
      next:(reset) =>{
        console.log(reset)
        if(reset.message.includes('Done'))
        {
          this.sent = true;
          this._snackBar.open("Mot de passe modifie avec succes",
          "OK",
          {duration:3000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: 'snack'});
            this.router.navigate(['/login'])
        }
      },
      error:(err) =>{
        console.error('An error occurred:', err);  
        this.sent=false;
        this._snackBar.open("Token ou Mot de passe  Errone","OK",{
          duration:3000 ,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: 'snack'});
      }
    })
  }
  // onSend() {
  //   const email = this.form.email;
  
  //   this.forgot.forgot(email).subscribe(
  //     (response) => {
  //       try {
  //         console.log(response.body); // Add this line to log the response body
  //         console.log('Forgot password request sent successfully:', response);
  //         this.router.navigate(['/login']);
  //       } catch (error) {
  //         console.error('Error occurred while parsing response:', error);
  //       }
  //     },
  //     (error) => {
  //       console.error('An error occurred:', error);
  //     }
  //   );
  // }
  
  ngOnInit(): void {
  }

}
