import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-agence-board',
  templateUrl: './agence-board.component.html',
  styleUrls: ['./agence-board.component.scss']
})
export class AgenceBoardComponent implements OnInit {

  constructor(private authService:AuthService,private storageService:StorageService,private http:HttpClient) { }
  activated = this.storageService.getAgence().activated;
  ngOnInit(): void {
   
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
