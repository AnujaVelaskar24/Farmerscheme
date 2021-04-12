import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-apply-bid',
  templateUrl: './apply-bid.component.html',
  styleUrls: ['./apply-bid.component.css']
})
export class ApplyBidComponent implements OnInit {

  // applybid= new FormGroup({
  //   croptype: new FormControl('',[Validators.required])
  // })
  constructor() { }

  ngOnInit(): void {
  }

}
