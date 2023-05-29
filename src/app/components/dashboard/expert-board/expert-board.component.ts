import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-expert-board',
  templateUrl: './expert-board.component.html',
  styleUrls: ['./expert-board.component.scss']
})
export class ExpertBoardComponent implements OnInit {

  constructor(private authService:AuthService,private storageService:StorageService) { }

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
