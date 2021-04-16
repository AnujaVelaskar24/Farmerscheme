import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bidderhome',
  templateUrl: './bidderhome.component.html',
  styleUrls: ['./bidderhome.component.css']
})
export class BidderhomeComponent implements OnInit {

  constructor() 
  {
    let  userid = sessionStorage.getItem("userid");
    console.log(userid);
  }

  ngOnInit(): void {
  }

}
