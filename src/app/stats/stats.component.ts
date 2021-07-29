import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  public signup = [
    {
      SrNo: 1,
      Name: "S K",
      Company: "ABC",
      Email_Address: "sk@abc.com",
      Country: "India",
      Sign_up_Status: "Done",
      App_Set_Up_Status: "Awaiting"
    },
    {
      SrNo: 2,
      Name: "B K",
      Company: "PQR",
      Email_Address: "bk@pqr.com",
      Country: "India",
      Sign_up_Status: "Done",
      App_Set_Up_Status: "Awaiting"
    },
    {
      SrNo: 3,
      Name: "A S",
      Company: "AC",
      Email_Address: "as@ac.com",
      Country: "India",
      Sign_up_Status: "Done",
      App_Set_Up_Status: "Done"
    },
    {
      SrNo: 4,
      Name: "Q W E",
      Company: "CV",
      Email_Address: "qwe@cv.com",
      Country: "India",
      Sign_up_Status: "Done",
      App_Set_Up_Status: "Awaiting"
    },
    {
      SrNo: 5,
      Name: "Z X",
      Company: "GH",
      Email_Address: "zx@gh.com",
      Country: "India",
      Sign_up_Status: "Done",
      App_Set_Up_Status: "Done"
    },
    {
      SrNo: 7,
      Name: "J K",
      Company: "TRI",
      Email_Address: "jk@tri.com",
      Country: "India",
      Sign_up_Status: "Awaiting",
      App_Set_Up_Status: "Awaiting"
    },
    {
      SrNo: 8,
      Name: "F V",
      Company: "COL",
      Email_Address: "fv@col.com",
      Country: "India",
      Sign_up_Status: "Done",
      App_Set_Up_Status: "Awaiting"
    },
    {
      SrNo: 9,
      Name: "L O",
      Company: "ABC",
      Email_Address: "abc@gmail.com",
      Country: "India",
      Sign_up_Status: "Done",
      App_Set_Up_Status: "Awaiting"
    },
    {
      SrNo: 10,
      Name: "N M H",
      Company: "FDI",
      Email_Address: "nmh@fdi.com",
      Country: "India",
      Sign_up_Status: "Done",
      App_Set_Up_Status: "Awaiting"
    }
  
]

  constructor() { }

  ngOnInit() {
  }

}
