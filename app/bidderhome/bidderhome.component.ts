import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bidderhome',
  templateUrl: './bidderhome.component.html',
  styleUrls: ['./bidderhome.component.css']
})
export class BidderhomeComponent implements OnInit {

  constructor(private router: Router) 
  {
    let  userid = sessionStorage.getItem("userid");
    console.log(userid);
  }

  ngOnInit(): void {
    if(!sessionStorage.getItem('userid')){
      this.router.navigateByUrl('home');
    }
  }

}
