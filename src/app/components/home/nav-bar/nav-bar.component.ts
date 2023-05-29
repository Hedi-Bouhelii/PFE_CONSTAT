import { Component, HostListener, OnInit } from '@angular/core';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarhomePageComponent implements OnInit {

  scroll_postion = false ;

  isAuthenticated : boolean | undefined;
  userName : String | null | undefined ;
  
  replysNumber = 0 ;


  ngOnInit(): void {
    
    }


  scrollTo(tag : string){
    document.getElementById(tag)?.scrollIntoView();
  }


  @HostListener("document:scroll")
  scrollfunction(){
    if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30){
      this.scroll_postion = true;
    }else{
      this.scroll_postion = false ;
    } 
  }

 



}
