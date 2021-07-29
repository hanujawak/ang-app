import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  public mobile =[
    {id:1, name:"Motrola"},
    {id:2, name:"Moto",},
    {id:3,name:"MotoT"}
  ]

  del(id){
    this.mobile = this.mobile.filter(item => item.id !==id);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
