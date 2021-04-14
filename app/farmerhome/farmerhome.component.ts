import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-farmerhome',
  templateUrl: './farmerhome.component.html',
  styleUrls: ['./farmerhome.component.css']
})
export class FarmerhomeComponent implements OnInit {
  contactForm = new FormGroup({
    croptype: new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
    cropname : new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
    fertilzertype : new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
    quantity : new FormControl('',[Validators.required, Validators.pattern("^[0-9]+$")]), 
    
  })
  contactForm1 = new FormGroup({
    policyno: new FormControl('',[Validators.required, Validators.pattern("^[0-9]+$")]),
    insurancecompany : new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
    nameofinusree : new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
    suminsured : new FormControl('',[Validators.required, Validators.pattern("^[0-9]+$")]),
    causeofloss : new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
    dateofloss : new FormControl('',[Validators.required]),
    
    
  })

  constructor() { }

  ngOnInit(): void {
  }

  get croptype() {
    return this.contactForm.get('croptype');
  } 
  get cropname() {
    return this.contactForm.get('cropname');
  }
  get fertilzertype() {
    return this.contactForm.get('fertilzertype');
  }
  get quantity() {
    return this.contactForm.get('quantity');
  }

  onSubmit() {
    console.log(this.contactForm.value);
  } 

  get policyno() {
    return this.contactForm1.get('policyno');
  } 
  get insurancecompany() {
    return this.contactForm1.get('insurancecompany');
  }
  get nameofinusree() {
    return this.contactForm1.get('nameofinusree');
  }
  get suminsured() {
    return this.contactForm1.get('suminsured');
  }
  get causeofloss() {
    return this.contactForm1.get('causeofloss');
  }
  get dateofloss() {
    return this.contactForm1.get(' dateofloss');
  }

  onSubmit1() {
    console.log(this.contactForm1.value);
  } 
}
