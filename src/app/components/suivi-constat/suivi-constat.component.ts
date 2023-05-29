import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { User } from 'src/app/modals/User';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-suivi-constat',
  templateUrl: './suivi-constat.component.html',
  styleUrls: ['./suivi-constat.component.scss']
})
export class SuiviConstatComponent implements OnInit {
  formattedDate:any
  activeRoute:any
  constructor( private datePipe:DatePipe,private api:ApiService, private storage : StorageService,private _formBuilder: FormBuilder) { }
  user:any
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;


  ngOnInit(): void {
    this.formattedDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    console.log(this.formattedDate);
   this.user = this.storage.getUser()
  }

}
