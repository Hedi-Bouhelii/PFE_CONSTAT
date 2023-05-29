import { Component, OnInit } from '@angular/core';
import { User } from '../../../modals/User';
import { ApiService } from '../../../services/api.service';
import { DatePipe } from '@angular/common';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ManageAccountComponent } from '../../settings/manage-account/manage-account.component';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  user: any;
  constructor(private api: ApiService,private dialog:MatDialog,private service:StorageService) { }
  openAccountSettings(id:any) {
    console.log(id)
    const dialogRef = this.dialog.open(ManageAccountComponent,{data:id});

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
  userContrat?: MatDialogRef<any>;

  users: User[] = [];
  ngOnInit(): void {
    this.api.getAllAssure().subscribe({
      next : (data : User[]) => {
    this.users = data; },
      error: err => {
        console.log(err);
      }
    })
  }

  activate(ID:any) {
    this.service.saveId(ID);
  }}
