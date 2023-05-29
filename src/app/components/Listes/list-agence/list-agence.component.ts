import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Agence } from 'src/app/modals/Agence';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { Person } from 'src/app/shared/Person';
import { Vehicule } from 'src/app/shared/Vehicule';

@Component({
  selector: 'app-list-agence',
  templateUrl: './list-agence.component.html',
  styleUrls: ['./list-agence.component.scss']
})

export class ListAgenceComponent implements OnInit {
  constructor(private authService:AuthService,private storageService:StorageService, private api:ApiService,private http : HttpClient) { }
  agences : Agence[] = [];
  Vehicules : Vehicule[] = [new Vehicule()];
  Persons : Person[] = [new Person()];
  ngOnInit(): void {
    this.api.getAllAgence().subscribe({
    next : (data : Agence[]) => {
    this.agences = data;   },
    error: err => {
    console.log(err);
  }
})
}
  status(){
    const status = this.api.getAllAgence()
    console.log(status);
  }
  downloadFile(path: string){
    const index = path.indexOf("assets\\");
    const result = path.substring(index);
    const filePath = result;
    this.http.get(filePath, { responseType: 'blob' }).subscribe((response: Blob) => {
      const blob = new Blob([response], { type: response.type });
      const downloadURL = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadURL;
      const parts = filePath.split("\\");
      const fileName = parts[parts.length - 1];
      link.download = fileName ;
      link.click();
  })
  }

  activate(id:any) {
    console.log(id)
    this.api.activate(id).subscribe({
      next: res => {
        console.log(res)
      },
      error:err => {
        console.log(err)
      }
    })
  }
  addCarInfo(){
    this.Vehicules.push(new Vehicule())
    this.Vehicules[this.Vehicules.length - 1].numVIN
    this.Vehicules[this.Vehicules.length - 1].matricule
  }
  
  addPersonInfo(){
    this.Persons.push(new Person())
    this.Persons[this.Persons.length - 1].CIN
    this.Persons[this.Persons.length - 1].nomComplet
  }
}
