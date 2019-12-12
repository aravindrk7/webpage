import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  dash: number;
  cont: number;

  constructor() { }

  ngOnInit() {
  }
  rotateArrow(submenu){
    if (submenu == 'dash'){
      if (this.dash == 270){
         this.dash = 90 
      }
      else{
         this.dash = 270;
      }
    } 
    else{ 
      if (this.cont == 270){
        this.cont = 90 
     }
     else{
        this.cont = 270;
     }
    } 

  }

}

