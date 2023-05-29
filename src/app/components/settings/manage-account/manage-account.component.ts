import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as moment from 'moment';
import { User } from 'src/app/modals/User';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';
import { Contrat } from 'src/app/shared/Contrat';

@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.scss']
})
export class ManageAccountComponent implements OnInit {
  id:string |any
  hasContrat:boolean=false
  constructor(private storage:StorageService, private api:ApiService,private service:StorageService,private _snackBar: MatSnackBar,@Inject(MAT_DIALOG_DATA) public data: any,) { 
    this.id = this.data
    console.log(this.id)
  }
  contrat: Contrat = new Contrat;
 

  ngOnInit(): void {
    console.log(this.id,this.data)

    this.api.getContrat(this.id).subscribe({
  
      next : (data : Contrat) => {
        if (data){
          this.contrat =data; 
          this.contrat.dateExpiration = moment(this.contrat.dateExpiration).format('YYYY-MM-DD').toString()
          this.hasContrat=true
        }
        else {
          this.hasContrat = false
        }
        console.log(this.contrat)
  }
    })
  }
  testAhmed(){
    console.log(this.contrat.dateExpiration,'ahmed')
  }

  sendContractDetails(){
    if(!this.hasContrat){
      const {refContrat,dateExpiration,activated} = this.contrat
      console.log(refContrat,dateExpiration,activated,this.service.getAgence().id,this.service.getUserId())
      // @ts-ignore
      this.api.addContrat(refContrat,dateExpiration,activated,this.service.getAgence().id,this.service.getUserId()).subscribe({
        next:()=>{
          this._snackBar.open("Votre Compte a été créee avec succes ",
          "OK",
          {duration:3000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass:'snack'});
            this.hasContrat=true
        }
       
      });
    }
      else{
        const {activated} = this.contrat
        console.log(activated,this.id);
        // @ts-ignore
        this.api.updateContrat(activated,this.id).subscribe();
      }
  }


}

