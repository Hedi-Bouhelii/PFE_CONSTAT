import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {
  formAssure:any={
    firstname:null,
    lastname:null,
    age:null
  }
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit():void{
    const  {firstname,lastanme,age} = this.formAssure
    console.log(this.formAssure)
  }
}
