import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-apply-bid',
  templateUrl: './apply-bid.component.html',
  styleUrls: ['./apply-bid.component.css']
})
export class ApplyBidComponent implements OnInit {
  contactForm = new FormGroup({
    croptype: new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
    cropname : new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
    fertilzertype : new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
    quantity : new FormControl('',[Validators.required, Validators.pattern("^[0-9]+$")]), 
    
  })

  constructor() { }

  ngOnInit(): void {}
 
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

}
