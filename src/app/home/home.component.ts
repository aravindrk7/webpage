import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // dash: number;
  // cont: number;
  status :string = 'more';
@ViewChild('more',{static: false}) more : ElementRef
  constructor() { }

  ngOnInit() {
  }
  show(){
    // this.status = 'more' ? 'less' : 'more';

    if(this.status == 'more'){
      this.status = 'less';
      this.more.nativeElement.style.display = 'block'
    }
    else{
      this.status = 'more';
      this.more.nativeElement.style.display = 'none'
    }
  }
  // rotateArrow(submenu){
  //   if (submenu == 'dash'){
  //     if (this.dash == 270){
  //        this.dash = 90 
  //     }
  //     else{
  //        this.dash = 270;
  //     }
  //   } 
  //   else{ 
  //     if (this.cont == 270){
  //       this.cont = 90 
  //    }
  //    else{
  //       this.cont = 270;
  //    }
  //   } 

  // }

}
