import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SellrequestService } from '../sellrequest.service';
import { CroptypefetchService } from '../croptypefetch.service';
import { InsuranceService } from '../insurance.service';
import { InsuranceclaimService } from '../insuranceclaim.service';
@Component({
  selector: 'app-farmerhome',
  templateUrl: './farmerhome.component.html',
  styleUrls: ['./farmerhome.component.css']
})
export class FarmerhomeComponent implements OnInit {
  public insurancedata = [];
  SellRequestForm = new FormGroup({
    croptype: new FormControl('',[Validators.required]),
    crop_id : new FormControl('',[Validators.required]),
    fertilizer_type : new FormControl('',[Validators.required]),  //, Validators.pattern("^[a-zA-Z]+$")]),
    quantity : new FormControl('',[Validators.required, Validators.pattern("^[0-9]+$")]), 
    base_price : new FormControl('',[Validators.required, Validators.pattern("^[0-9]+$")]),
    userid: new FormControl(sessionStorage.getItem("userid")),
  })
  

  constructor(public fb: FormBuilder,
    private router: Router,
    public sellrequestService: SellrequestService,
    public croptypefetchService: CroptypefetchService,
    public insuranceService: InsuranceService,
    public insuranceclaimService: InsuranceclaimService,
    ) { 
      this.insuranceService.insurance(this.uid).subscribe(res => {
        // console.log(res, "get insurance console");
        this.insurancedata=res;
      });
    }

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
    // console.log(selectedtype);

    this.croptypefetchService.croptypefetch(this.selectedtype).subscribe(res => {
      this.crops=res;
    });
  }

  public selectedfertilizertype:string;
  onfertilizertypeSelect(selectedfertilizertype){
    //console.log(selectedfertilizertype);
  }

  onSubmit() {
    //console.log(this.SellRequestForm.value, "Input data");
    
    this.sellrequestService.sellrequest(this.SellRequestForm.value).subscribe(res => {
      //console.log(res, "sell request console");
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

  contactForm1 = new FormGroup({
    
    policyno: new FormControl(),
    // insurancecompany : new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
    // nameofinusree : new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
    // suminsured : new FormControl('',[Validators.required, Validators.pattern("^[0-9]+$")]),
    cause_of_loss : new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
    date_of_loss : new FormControl('',[Validators.required]),
    // userid : new FormControl(sessionStorage.getItem("userid")),
  })

  get policyno(){
    
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
  get cause_of_loss() {
    return this.contactForm1.get('cause_of_loss');
  }
  get date_of_loss() {
    return this.contactForm1.get(' date_of_loss');
  }

  public selectedcause:string;
  on_cause_of_loss(selectedcause){

  }
  
   uid:number = Number(sessionStorage.getItem("userid"));
   
  onGetInsurance() {
    //console.log("Inside function")
    this.insuranceService.insurance(this.uid).subscribe(res => {
      //console.log(res, "get insurance console");
      this.insurancedata=res;
      //console.log(this.insurancedata[0].season, "data console")
    });
  } 

  onSubmit1() {
    
    let insuranceclaim_obj = new insurance_claim_class();
    insuranceclaim_obj.policy_no=this.insurancedata[0].policy_no;
    insuranceclaim_obj.cause_of_loss=this.contactForm1.value.cause_of_loss;
    insuranceclaim_obj.date_of_loss=this.contactForm1.value.date_of_loss;
    insuranceclaim_obj.claim_date = new Date();
    this.insuranceclaimService.insuranceclaim(insuranceclaim_obj).subscribe(res => {

    });
  } 
}

export class insurance_claim_class
{
  policy_no:number;
  cause_of_loss : string;
  date_of_loss : Date;
  claim_date : Date;
}
