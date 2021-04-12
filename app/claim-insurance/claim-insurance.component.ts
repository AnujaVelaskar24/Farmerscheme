import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-claim-insurance',
  templateUrl: './claim-insurance.component.html',
  styleUrls: ['./claim-insurance.component.css']
})
export class ClaimInsuranceComponent implements OnInit {
  contactForm = new FormGroup({
    policyno: new FormControl('',[Validators.required, Validators.pattern("^[0-9]+$")]),
    insurancecompany : new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
    nameofinusree : new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
    suminsured : new FormControl('',[Validators.required, Validators.pattern("^[0-9]+$")]),
    causeofloss : new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
    dateofloss : new FormControl('',[Validators.required]),
    
    
  })

  constructor() { }

  ngOnInit(): void {}
  get policyno() {
    return this.contactForm.get('policyno');
  } 
  get insurancecompany() {
    return this.contactForm.get('insurancecompany');
  }
  get nameofinusree() {
    return this.contactForm.get('nameofinusree');
  }
  get suminsured() {
    return this.contactForm.get('suminsured');
  }
  get causeofloss() {
    return this.contactForm.get('causeofloss');
  }
  get dateofloss() {
    return this.contactForm.get(' dateofloss');
  }

  onSubmit() {
    console.log(this.contactForm.value);
  } 

}
