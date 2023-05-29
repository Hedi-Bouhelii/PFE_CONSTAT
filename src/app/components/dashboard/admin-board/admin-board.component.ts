import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Agence } from '../../../modals/Agence';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-admin-board',
  templateUrl: './admin-board.component.html',
  styleUrls: ['./admin-board.component.scss']
})
export class AdminBoardComponent implements OnInit {

  constructor(private authService:AuthService,private storageService:StorageService, private api:ApiService,private http : HttpClient) { }

  agences : Agence[] = [];
  ngOnInit(): void {
    this.api.getAllAgence().subscribe({
   next : (data : Agence[]) => {
this.agences = data;   },
   error: err => {
     console.log(err);
   }
 })
}
activate(id:any) {
console.log(id)
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

}
