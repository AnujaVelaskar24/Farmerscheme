import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apply-insurance',
  templateUrl: './apply-insurance.component.html',
  styleUrls: ['./apply-insurance.component.css']
})
export class ApplyInsuranceComponent implements OnInit {

  isShow:boolean
  displaytext(){
    this.isShow=!this.isShow;
  }
  constructor() { 
    this.isShow=false;
   
  }

  ngOnInit(): void {
   
  }

}
