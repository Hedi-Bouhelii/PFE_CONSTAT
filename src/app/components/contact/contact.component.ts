import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Contact } from 'src/app/shared/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor (private api:ApiService){}
  contacts : Contact[] = [] ;
  ngOnInit(): void {
    this.api.getAllMessages().subscribe({
      next : (data : Contact[]) => {
    this.contacts = data; 
  console.log(this.contacts)  },
      error: err => {
        console.log(err);
      }
    })
  }
delete(id: any, index: number){
  this.api.deleteMessage(id).subscribe({
   
  });
  this.contacts.splice(index, 1);}
}
