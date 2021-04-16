import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SellrequestService } from '../sellrequest.service';
import { CroptypefetchService } from '../croptypefetch.service';

@Component({
  selector: 'app-farmerhome',
  templateUrl: './farmerhome.component.html',
  styleUrls: ['./farmerhome.component.css']
})
export class FarmerhomeComponent implements OnInit {
  
  SellRequestForm = new FormGroup({
    croptype: new FormControl('',[Validators.required]),
    crop_id : new FormControl('',[Validators.required]),
    fertilizer_type : new FormControl('',[Validators.required]),  //, Validators.pattern("^[a-zA-Z]+$")]),
    quantity : new FormControl('',[Validators.required, Validators.pattern("^[0-9]+$")]), 
    base_price : new FormControl('',[Validators.required, Validators.pattern("^[0-9]+$")]),
    userid: new FormControl(sessionStorage.getItem("userid")),
  })
  contactForm1 = new FormGroup({
    policyno: new FormControl('',[Validators.required, Validators.pattern("^[0-9]+$")]),
    insurancecompany : new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
    nameofinusree : new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
    suminsured : new FormControl('',[Validators.required, Validators.pattern("^[0-9]+$")]),
    causeofloss : new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
    dateofloss : new FormControl('',[Validators.required]),
    
    
  })

  constructor(public fb: FormBuilder,
    private router: Router,
    public sellrequestService: SellrequestService,
    public croptypefetchService: CroptypefetchService
    ) { }

  ngOnInit(): void {
  }
  get croptype() {
    return this.SellRequestForm.get('croptype');
  } 
  get crop_id() {
    return this.SellRequestForm.get('crop_id');
  }
  get fertilizer_type() {
    return this.SellRequestForm.get('fertilizer_type');
  }
  get quantity() {
    return this.SellRequestForm.get('quantity');
  }
  get base_price() {
    return this.SellRequestForm.get('base_price');
  }
  get userid()
  {
    return this.userid;
  }

  public selectedtype:string;
  public crops = [];
  ontypeSelect(selectedtype){
    console.log(selectedtype);

    this.croptypefetchService.croptypefetch(this.selectedtype).subscribe(res => {
      console.log(res, "ontype console data");
      this.crops=res;
    });
  }

  public selectedfertilizertype:string;
  onfertilizertypeSelect(selectedfertilizertype){
    console.log(selectedfertilizertype);
  }
  
  onSubmit() {
    console.log(this.SellRequestForm.value, "Input data");
    
    this.sellrequestService.sellrequest(this.SellRequestForm.value).subscribe(res => {
      console.log(res, "sell request console");
      // if(res === "Unsuccessful")
      // {
      //   console.log("invalid");
      // }
      // else
      // {
      //   console.log("valid");
      // }
    });
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
