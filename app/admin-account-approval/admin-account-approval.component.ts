import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {AdminAccountApprovalService} from '../admin-account-approval.service';
@Component({
  selector: 'app-admin-account-approval',
  templateUrl: './admin-account-approval.component.html',
  styleUrls: ['./admin-account-approval.component.css']
})
export class AdminAccountApprovalComponent implements OnInit {
  //ApproveForm : FormGroup;
public users = [];
public usertype:string;
ApproveForm = new FormGroup({
  userid: new FormControl(),
  user_type : new FormControl(),
  username : new FormControl(),
  phone_no : new FormControl(),
  email_id: new FormControl(),
  password : new FormControl(),
  home_address : new FormControl(),
  account_no : new FormControl(),
  ifsc_code: new FormControl(),
  pan : new FormControl(),
  aadhar : new FormControl(),
  certificate : new FormControl()
  
})
  constructor( public fb: FormBuilder,
    private router: Router,
    public adminaccountapprovalservice: AdminAccountApprovalService) 
    { 
    this.adminaccountapprovalservice.Getuser_information().subscribe(res => {
      console.log(res,"const console");
      this.users=res;
  });
}
//ngOnInit(){}
  ngOnInit() 
  {
    this.adminaccountapprovalservice.Getuser_information().subscribe(res => {
      this.users=res;
      console.log(this.users, "USERS DATA")
      if(res.user_type===true)
    {
      this.users[0].user_type="bidder";
      console.log("bidder");
    }
    else
    {
      this.usertype="farmer";
      console.log(res.user_type);
    }
      console.log("hi");
    });

  }
  get userid() {
    return this.ApproveForm.get('userid');
  } 
  get user_type() {
    return this.ApproveForm.get('user_type');
  }
  get username() {
    return this.ApproveForm.get('username');
  } 
  get phone_no() {
    return this.ApproveForm.get('phone_no');
  }
  get email_id() {
    return this.ApproveForm.get('email_id');
  } 
  get password() {
    return this.ApproveForm.get('password');
  }
  get home_address() {
    return this.ApproveForm.get('home_address');
  } 
  get account_no() {
    return this.ApproveForm.get('account_no');
  }
  get ifsc_code() {
    return this.ApproveForm.get('ifsc_code');
  } 
  get pan() {
    return this.ApproveForm.get('pan');
  }
  get aadhar() {
    return this.ApproveForm.get('aadhar');
  } 
  get certificate() {
    return this.ApproveForm.get('certificate');
  }
onapprove(userid)
{
  console.log(userid, "UserId");
  this.adminaccountapprovalservice.update(userid).subscribe(res => {
    console.log(res, "ontype console data");
    this.ngOnInit();
    
  });
}
}
