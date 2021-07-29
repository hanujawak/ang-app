import { NgIf } from '@angular/common';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public status = false;
    toggle:boolean = true;

    myfunc(){
      if (this.status== false){
        this.status = true;
        this.toggle =false;
        
      }
      else{
        this.status = false;
        this.toggle =!this.toggle
      }
      
    }

  constructor() { }

  ngOnInit() {
  }


}
