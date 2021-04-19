import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CroptypefetchService } from '../croptypefetch.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Getinsurance } from '../getinsurance';
import { GetinsuranceserviceService } from '../getinsuranceservice.service';
import { ApplyinsuranceinsertService } from '../applyinsuranceinsert.service';
import { Getlandclass } from '../model/getlandclass';

@Component({
  selector: 'app-apply-insurance',
  templateUrl: './apply-insurance.component.html',
  styleUrls: ['./apply-insurance.component.css']
})
export class ApplyInsuranceComponent implements OnInit {
  land2:Applyinsuranceclass[]=[];
  applyinsuranceForm = new FormGroup({
  crop_type: new FormControl(''),
  crop_id : new FormControl(''),
   crop_name:new FormControl(''),
    area:new FormControl('',[Validators.required]),
    // suminsured:new FormControl('',[Validators.required]),
    // farmer_share_percent:new FormControl('',[Validators.required]),
    
  })
  public area1:number;
  public cropname:string;
 public premiumpaidbyfarmer:number=0;
 public suminsured:number=0;
 public suminsuredperhectare:number;
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
    this.suminsuredperhectare= this.cropdata[0].sum_insured_per_hectare;
    this.farmershare=this.cropdata[0].farmer_share_percent;
     this.actualrate=this.cropdata[0].actual_rate;
    //console.log(this.applyinsuranceForm.value.crop_name);
  //  this.cropname=this.applyinsuranceForm.value.crop_name;
    // console.log(this.area1,"AREA1");
    // console.log(this.applyinsuranceForm.value.area,"DATA")
    this.area1=this.applyinsuranceForm.value.area;
    this.cropname=this.applyinsuranceForm.value.crop_name;
    this.suminsured=this.area1*this.suminsuredperhectare;
   
    this.premiumpaidbyfarmer=(this.farmershare*this.suminsured)/100;
    // console.log(this.premiumpaidbyfarmer,this.farmershare,"farmershare");

    this.premiumpaidbygovt=((this.actualrate-this.farmershare)*this.suminsured)/100;
    // console.log(this.premiumpaidbygovt);

   
      //  console.log(this.suminsuredperhectare,this.farmershare,this.actualrate, "get insurance console");
    });
    // userid:number;
    // land_id:number;
    // season:string;
    // year:number;
    // crop_id:number;
    // sum_insured:number;
    // insurance_company:string;
    // premium_amount:number;
    // start_date:Date;
    // end_date:Date;
  }
  
  constructor(public fb: FormBuilder,
    private router: Router,
    public croptypefetchService: CroptypefetchService,
    public getinsurservice:GetinsuranceserviceService,
    public insertinsurance:ApplyinsuranceinsertService) { 
    this.isShow=false;
   
  }
  displayalert(){
    let applyinsurance_obj = new Applyinsuranceclass();
    applyinsurance_obj.userid=this.land2[0].userid;
    applyinsurance_obj.land_id=this.land2[0].land_id;
    applyinsurance_obj.season=this.applyinsuranceForm.value.season;
    applyinsurance_obj.year=this.applyinsuranceForm.value.year;
    applyinsurance_obj.crop_id=this.land2[0].crop_id;
    applyinsurance_obj.sum_insured=this.applyinsuranceForm.value.sum_insured;
    applyinsurance_obj.insurance_company=this.applyinsuranceForm.value.insurance_company;
    applyinsurance_obj.premium_amount=this.applyinsuranceForm.value.premium_amount;
    applyinsurance_obj.start_date = new Date();
    applyinsurance_obj.end_date=new Date();
    //change this to 1 yr later
    // this..getinsurance(applyinsurance_obj).subscribe(res => {

    // });
    this.insertinsurance.applyinsurance(applyinsurance_obj).subscribe(res=>{

    })


    alert("Your Insurance is successfully applied");
  }
  getinsurances : Getinsurance[]=[];
  public selectedtype:string;
  public crops = [];
  ontypeSelect(selectedtype){
  // console.log(selectedtype);
  
  this.croptypefetchService.croptypefetch(this.selectedtype).subscribe(res => {
  //console.log(res, "ontype console data");
  this.crops=res;
  });
  }

  onSubmit(){
    console.log(this.applyinsuranceForm.value);
  }
  ngOnInit(): void {
    
  }


  get crop_id() {
    return this.applyinsuranceForm.get('crop_id');
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
export class Applyinsuranceclass {
  userid:number;
  land_id:number;
  season:string;
  year:number;
  crop_id:number;
  sum_insured:number;
  insurance_company:string;
  premium_amount:number;
  start_date:Date;
  end_date:Date;
}




// import { Component, OnInit } from '@angular/core';
// import { FormBuilder } from '@angular/forms';
// import { Router } from '@angular/router';
// import { CroptypefetchService } from '../croptypefetch.service';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { Getinsurance } from '../getinsurance';
// import { GetinsuranceserviceService } from '../getinsuranceservice.service';
// @Component({
//   selector: 'app-apply-insurance',
//   templateUrl: './apply-insurance.component.html',
//   styleUrls: ['./apply-insurance.component.css']
// })
// export class ApplyInsuranceComponent implements OnInit {
//   applyinsuranceForm = new FormGroup({
//     crop_type: new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
//     crop_id : new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
//     crop_name:new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
//     area:new FormControl('',[Validators.required]),
//     suminsured:new FormControl('',[Validators.required]),
//     farmer_share_percent:new FormControl('',[Validators.required]),
    
//   })
//   public area1:number;
//   public cropname:string;
//  public premiumpaidbyfarmer:number;
//  public suminsured:number;
//  public suminsuredperhectare:number;
//  public farmershare:number;
// public actualrate:number;
 
//   public govtshare:number;
//   public premiumpaidbygovt:number;
//   isShow:boolean
 
 
//   displaytext(crop_name){
//     this.getinsur.getinsurance(crop_name).subscribe((data:Getinsurance[])=>{
//       // console.log(res, "ontype console data");
//       this.getinsurances=data;
//       // this.adminaccountapprovalservice.update(userid).subscribe(res => {
//       //   console.log(res, "ontype console data");
//       //   this.ngOnInit();
//       // });
//        console.log(this.getinsurances,"HIIIIII")
//     })
    
//     this.isShow=!this.isShow;
//     console.log(this.applyinsuranceForm.value.crop_name);
//   //  this.cropname=this.applyinsuranceForm.value.crop_name;
//     // console.log(this.area1,"AREA1");
//     // console.log(this.applyinsuranceForm.value.area,"DATA")
//     this.area1=this.applyinsuranceForm.value.area;
//     this.cropname=this.applyinsuranceForm.value.crop_name;
//     this.suminsured=this.area1*this.suminsuredperhectare;
//     this.premiumpaidbyfarmer=(this.farmershare*this.suminsured)/100;
   
//     console.log(this.premiumpaidbyfarmer,"farmer")
  

//     this.premiumpaidbygovt=((this.actualrate-this.farmershare)*this.suminsured)/100;
//     // console.log(this.premiumpaidbygovt);
    


//   }
//   displayalert(){
//     alert("Your Insurance is successfully applied");
//   }
//   constructor(public fb: FormBuilder,
//     private router: Router,
//     public croptypefetchService: CroptypefetchService,
//     public getinsur:GetinsuranceserviceService) { 
//     this.isShow=false;
   
//   }
//   getinsurances : Getinsurance[]=[];
//   public selectedtype:string;
//   public crops = [];
//   ontypeSelect(selectedtype){
//   console.log(selectedtype);
  
//   this.croptypefetchService.croptypefetch(this.selectedtype).subscribe(res => {
//   //console.log(res, "ontype console data");
//   this.crops=res;
//   });
//   }

//   onSubmit(){
//     console.log(this.applyinsuranceForm.value);
//   }
//   ngOnInit() {
//      console.log(this.premiumpaidbyfarmer,this.farmershare,"farmershare");
//     this.suminsuredperhectare= this.getinsurances[0].sum_insured_per_hectare;
//     this.farmershare=this.getinsurances[0].farmer_share_percent;
//     this.actualrate=this.getinsurances[0].actual_rate;
    
    
//   }





//   get crop_id() {
//     return this.applyinsuranceForm.get('crop_id');
//   } 
//   get crop_type() {
//     return this.applyinsuranceForm.get('crop_type');
//   }
//   get area() {
//     return this.applyinsuranceForm.get('area');
//   }
//   get crop_name(){
//     return this.applyinsuranceForm.get('crop_name');
//   }
//   get sum_insured_per_hectare(){
//     return this.applyinsuranceForm.get('sum_insured_per_hectare');
//   }
//   get farmer_share_percent(){
//     return this.applyinsuranceForm.get('farmer_share_percent');
//   }


  

// }
