import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SellrequestService } from '../sellrequest.service';
import { CroptypefetchService } from '../croptypefetch.service';
import { InsuranceService } from '../insurance.service';
import { InsuranceclaimService } from '../insuranceclaim.service';
import { Getinsurance } from '../getinsurance';
import { GetinsuranceserviceService } from '../getinsuranceservice.service';

@Component({
  selector: 'app-farmerhome',
  templateUrl: './farmerhome.component.html',
  styleUrls: ['./farmerhome.component.css']
})
export class FarmerhomeComponent implements OnInit {
  public insurancedata = [];
  public disable_button:boolean;
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
    public getinsurservice:GetinsuranceserviceService
    ) { 
      this.isShow=false;
      this.insuranceService.insurance(this.uid).subscribe(res => {
        // console.log(res, "get insurance console");
        this.insurancedata=res;
      });
    }

  ngOnInit(): void {
    if(!sessionStorage.getItem('userid')){
      this.router.navigateByUrl('home');
    }
    this.insuranceService.insurance(this.uid).subscribe(res => {
      this.insurancedata=res;
      if(this.insurancedata.length==0){
        this.disable_button=true;
      }
      console.log(this.insurancedata);
    });
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
      console.log(res)
      console.log(this.crops[0].crop_name);
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
    
    contactForm1: new FormControl(),
    insurancecompany : new FormControl(''),
    nameofinusree : new FormControl(''),
    suminsured : new FormControl(''),
    cause_of_loss : new FormControl(''),
    date_of_loss : new FormControl(''),
    // userid : new FormControl(sessionStorage.getItem("userid")),
  })

  get policy_no(){
    
    return this.contactForm1.get('policy_no');
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
      console.log(this.insurancedata)
      //console.log(this.insurancedata[0].season, "data console")
    });
  } 

  onSubmit1() {
      let insuranceclaim_obj = new insurance_claim_class();
    insuranceclaim_obj.policy_no=this.insurancedata[0].policy_no;
    insuranceclaim_obj.cause_of_loss=this.contactForm1.value.cause_of_loss;
    insuranceclaim_obj.date_of_loss=this.contactForm1.value.date_of_loss;
    insuranceclaim_obj.claim_date = new Date();
    console.log(insuranceclaim_obj, "OBJ");
    this.insuranceclaimService.insuranceclaim(insuranceclaim_obj).subscribe(res => {
      alert("Insurance claim applied successfully");
    });
    
  } 


  // ------------APPLY INSURANCE--------------------------
  applyinsuranceForm = new FormGroup({
    crop_type: new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
    crop_id1 : new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
    crop_name:new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
    area:new FormControl('',[Validators.required]),
    suminsured1:new FormControl('',[Validators.required]),
    farmer_share_percent:new FormControl('',[Validators.required]),
    
  })
  public area1:number;
  public cropname:string;
 public premiumpaidbyfarmer:number=0;
 public suminsured1:number=0;
 public suminsured1perhectare:number;
 public farmershare:number;
public actualrate:number=0;
 
  public govtshare:number;
  public premiumpaidbygovt:number;
  isShow:boolean
  public cropdata=[];
 
  displaytext(){
    this.isShow=!this.isShow;
    this.getinsurservice.getinsurance(this.applyinsuranceForm.value.crop_name).subscribe(res => {
    this.cropdata=res;
    this.suminsured1perhectare= this.cropdata[0].sum_insured_per_hectare;
    this.farmershare=this.cropdata[0].farmer_share_percent;
     this.actualrate=this.cropdata[0].actual_rate;
    //console.log(this.applyinsuranceForm.value.crop_name);
  //  this.cropname=this.applyinsuranceForm.value.crop_name;
    // console.log(this.area1,"AREA1");
    // console.log(this.applyinsuranceForm.value.area,"DATA")
    this.area1=this.applyinsuranceForm.value.area;
    this.cropname=this.applyinsuranceForm.value.crop_name;
    this.suminsured1=this.area1*this.suminsured1perhectare;
   
    this.premiumpaidbyfarmer=(this.farmershare*this.suminsured1)/100;
    // console.log(this.premiumpaidbyfarmer,this.farmershare,"farmershare");

    this.premiumpaidbygovt=((this.actualrate-this.farmershare)*this.suminsured1)/100;
    // console.log(this.premiumpaidbygovt);

   
      //  console.log(this.suminsuredperhectare,this.farmershare,this.actualrate, "get insurance console");
    });

  }
  displayalert(){
    alert("Your Insurance is successfully applied");
  }
 
  getinsurances : Getinsurance[]=[];
  // public selectedtype:string;
  // public crops = [];
  // ontypeSelect(selectedtype){
  // // console.log(selectedtype);
  
  // this.croptypefetchService.croptypefetch(this.selectedtype).subscribe(res => {
  // //console.log(res, "ontype console data");
  // this.crops=res;
  // });
  // }

  // onSubmit(){
  //   console.log(this.applyinsuranceForm.value);
  // }
  
  get crop_id1() {
    return this.applyinsuranceForm.get('crop_id1');
  } 
  get crop_type() {
    return this.applyinsuranceForm.get('crop_type');
  }
  get area() {
    return this.applyinsuranceForm.get('area');
  }
  get crop_name(){
    return this.applyinsuranceForm.get('crop_name');
  }
  get sum_insured_per_hectare(){
    return this.applyinsuranceForm.get('sum_insured_per_hectare');
  }
  get farmer_share_percent(){
    return this.applyinsuranceForm.get('farmer_share_percent');
  }


  

}

export class insurance_claim_class
{
  policy_no:number;
  cause_of_loss : string;
  date_of_loss : Date;
  claim_date : Date;
}