import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Expert } from '../../../modals/Expert';

@Component({
  selector: 'app-list-experts',
  templateUrl: './list-experts.component.html',
  styleUrls: ['./list-experts.component.scss']
})
export class ListExpertsComponent implements OnInit {

  constructor(private api: ApiService) { }
  experts: Expert[] = [];
  ngOnInit(): void {
    this.api.getAllExpert().subscribe({
      next : (data : Expert[]) => {
    this.experts = data; 
  console.log(this.experts)  },
      error: err => {
        console.log(err);
      }
    })
  }

}
