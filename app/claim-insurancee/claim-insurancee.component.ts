import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-claim-insurancee',
  templateUrl: './claim-insurancee.component.html',
  styleUrls: ['./claim-insurancee.component.css']
})
export class ClaimInsuranceeComponent implements OnInit {

  // claimform = new FormGroup({
  //   policyno: new FormControl('',[Validators.required]),
  //   insurancecompany:new FormControl('',[Validators.required]),
  //   nameofinusree:new FormControl('',[Validators.required]),
  //   suminsured:new FormControl('',[Validators.required]),
  //   causeofloss:new FormControl('',[Validators.required]),
  //   dateofloss:new FormControl('',[Validators.required])
  // })

  constructor() { }
 

  ngOnInit(): void {
  }

}
