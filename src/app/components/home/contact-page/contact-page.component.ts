import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/services/api.service';
import { Contact } from 'src/app/shared/contact';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  constructor(private api:ApiService,private _snackBar: MatSnackBar) { }
  contact :Contact= new Contact
  ngOnInit(): void {
  }
  send(){
    const {nomComplet,email,message} = this.contact
    // @ts-ignore
    this.api.send(nomComplet,email,message).subscribe({
      next: () => {
        this._snackBar.open("Votre message a ete envoyee avec succes",
        "OK",
        {duration:3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass:'snack'});
      }

    });
    this.reloadPage();
  }
  reloadPage(): void {
    window.location.reload();
  }
}
