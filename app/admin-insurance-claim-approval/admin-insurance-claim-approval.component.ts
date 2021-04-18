import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {AdminInsuranceClaimApprovalService} from '../admin-insurance-claim-approval.service';

@Component({
  selector: 'app-admin-insurance-claim-approval',
  templateUrl: './admin-insurance-claim-approval.component.html',
  styleUrls: ['./admin-insurance-claim-approval.component.css']
})
export class AdminInsuranceClaimApprovalComponent implements OnInit {
  public insuranceclaim_res = [];
  InsuranceClaimApproveForm = new FormGroup({
    claim_id: new FormControl(),
    policy_no : new FormControl(),
    date_of_loss : new FormControl(),
    cause_of_loss : new FormControl(),
    claim_date: new FormControl(),
    username : new FormControl(),
    area : new FormControl(),
    crop_name : new FormControl()
  })
  constructor(public fb: FormBuilder,
    private router: Router,
    public admininsuranceclaimapprovalservice: AdminInsuranceClaimApprovalService) 
    {
      this.admininsuranceclaimapprovalservice.Getinsuranceclaim_information().subscribe(res => {
        console.log(res,"const console");
        this.insuranceclaim_res=res;
    });
     }

  ngOnInit()
   {
    this.admininsuranceclaimapprovalservice.Getinsuranceclaim_information().subscribe(res => {
    this.insuranceclaim_res=res;
    console.log("hi");
  });
  }
  get claim_id() {
    return this.InsuranceClaimApproveForm.get('claim_id');
  } 
  get policy_no() {
    return this.InsuranceClaimApproveForm.get('policy_no');
  }
  get date_of_loss() {
    return this.InsuranceClaimApproveForm.get('date_of_loss');
  } 
  get cause_of_loss() {
    return this.InsuranceClaimApproveForm.get('cause_of_loss');
  }
  get claim_date() {
    return this.InsuranceClaimApproveForm.get('claim_date');
  } 
  get username() {
    return this.InsuranceClaimApproveForm.get('username');
  }
  get area() {
    return this.InsuranceClaimApproveForm.get('area');
  } 
  get crop_name() {
    return this.InsuranceClaimApproveForm.get('crop_name');
  }

  onapprove(claim_id)
  {
    this.admininsuranceclaimapprovalservice.update(claim_id).subscribe(res => {
      console.log(res, "ontype console data");
      this.ngOnInit();
    });
  }
}
