import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private api:ApiService, private storage:StorageService) { }
  isUpdated=false;
  activated:any
  role:any
  agence:any
  tel:any
  user:any
  expert:any
  adminEmail:any
  adminFullName:any
  adminTel:any
  form:any ={
    email: null,
    tel:null,
    address:null
  }
  
  onSubmit(){
    const id = this.storage.getId()
    const {email, address,tel}=this.form;
    console.log(this.form)
    this.api.update(id,email,tel,address,"AGENCE").subscribe()
  }
  ngOnInit() {
    

  this.role =this.storage.getRole();
    
    
    if (this.role ==='ASSURE'){
    this.user = this.storage.getUser();
  }else if (this.role ==='AGENCE'){
    this.agence =this.storage.getAgence();
    this.activated = this.storage.getAgence().activated; 
  }
  if (this.role ==='EXPERT'){
    this.expert =this.storage.getExpert();
  }
  if (this.role ==='ADMIN'){
    this.adminEmail= "Karoui@gmail.com"
    this.adminFullName= "Karoui"
    this.adminTel="55566950"
  }

    console.log(this.user);
  }

  // form:any={
  //   newPassword:null,
  //   Currentpassword:null
  // } 
  // ngOnInit(): void {
  // }
  // onSubmit(){
  //   const {Currentpassword,newPassword}=this.form
  //   console.log(Currentpassword + newPassword)
  //   this.api.changePassword(Currentpassword,newPassword).subscribe(data => {
  //     console.log(data)
  //   })
  // }
}
