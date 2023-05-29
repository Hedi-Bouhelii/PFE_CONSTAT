import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { User } from 'src/app/modals/User';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor (private api:ApiService,private datePipe:DatePipe){}
  users: User[] = [];
  formattedDate:any


  ngOnInit(): void {
    this.api.getAllAssure().subscribe({
      next : (data : User[]) => {
    this.users = data; 
  console.log(this.users)  },
      error: err => {
        console.log(err);
      }
    })
    this.formattedDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    console.log(this.formattedDate);
  }
}
