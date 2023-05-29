import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { User } from 'src/app/modals/User';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ConstatComponent } from '../constat/constat.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  formattedDate:any
  activeRoute:any
  constructor( private datePipe:DatePipe,private api:ApiService, private storage : StorageService,private dialog:MatDialog) { }
  user:any
  openConstatPDF() {
    const dialogRef = this.dialog.open(ConstatComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit(): void {
    this.formattedDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    console.log(this.formattedDate);
   this.user = this.storage.getUser()
  }
  }


