import { Component, OnInit } from '@angular/core';
import { Expert } from 'src/app/modals/Expert';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-send-to-expert',
  templateUrl: './send-to-expert.component.html',
  styleUrls: ['./send-to-expert.component.scss']
})
export class SendToExpertComponent implements OnInit {

  constructor(private api: ApiService) { }
  experts: Expert[] = [];
  ngOnInit(): void {
    this.api.getAllExpert().subscribe({
      next : (data : Expert[]) => {
    this.experts = data; 
  console.log(data[0].name)  },
      error: err => {
        console.log(err);
      }
    })
  }

}
