import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {AdminInsuranceApprovalService} from '../admin-insurance-approval.service';

@Component({
  selector: 'app-admin-insurance-approval',
  templateUrl: './admin-insurance-approval.component.html',
  styleUrls: ['./admin-insurance-approval.component.css']
})
export class AdminInsuranceApprovalComponent implements OnInit {
  public insurance_res = [];
  InsuranceApproveForm = new FormGroup({
    policy_no: new FormControl(),
    username : new FormControl(),
    land_id : new FormControl(),
    season : new FormControl(),
    year: new FormControl(),
    crop_id : new FormControl(),
    sum_insured : new FormControl(),
    insurance_company : new FormControl(),
    premium_amount : new FormControl(),
    start_date: new FormControl(),
    end_date : new FormControl(),
    area: new FormControl(),
    crop_name: new FormControl()
  })
  constructor(public fb: FormBuilder,
    private router: Router,
    public admininsuranceapprovalservice: AdminInsuranceApprovalService) 
    {
      this.admininsuranceapprovalservice.Getinsurance_information().subscribe(res => {
        console.log(res,"const console");
        this.insurance_res=res;
    });
    }

  ngOnInit()
  {
    this.admininsuranceapprovalservice.Getinsurance_information().subscribe(res => {
      this.insurance_res=res;
      console.log("hi");
    });
  }
  get policy_no() {
    return this.InsuranceApproveForm.get('policy_no');
  } 
  get user_id() {
    return this.InsuranceApproveForm.get('user_id');
  }
  get land_id() {
    return this.InsuranceApproveForm.get('land_id');
  } 
  get season() {
    return this.InsuranceApproveForm.get('season');
  }
  get year() {
    return this.InsuranceApproveForm.get('year');
  } 
  get crop_id() {
    return this.InsuranceApproveForm.get('crop_id');
  }
  get sum_insured() {
    return this.InsuranceApproveForm.get('sum_insured');
  } 
  get insurance_company() {
    return this.InsuranceApproveForm.get('insurance_company');
  }
  get start_date() {
    return this.InsuranceApproveForm.get('start_date');
  } 
  get end_date() {
    return this.InsuranceApproveForm.get('end_date');
  }
  get area() {
    return this.InsuranceApproveForm.get('area');
  } 
  get crop_name() {
    return this.InsuranceApproveForm.get('crop_name');
  } 
  onapprove(policy_no)
  {
    this.admininsuranceapprovalservice.update(policy_no).subscribe(res => {
      console.log(res, "ontype console data");
      this.ngOnInit();
    });
  }
  public insurance_entity=[];
  getdata(item){
   
    console.log(item, "ITEM1")
    this.insurance_entity=item;
    console.log(this.insurance_entity[0].userid,"USER ID");
    console.log(this.insurance_entity, "INSURANCE ENTITY");
  }
}
