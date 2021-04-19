import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AdmincropapprovalService } from '../admincropapproval.service';
import { Register } from '../register';

@Component({
  selector: 'app-admin-crop-approval',
  templateUrl: './admin-crop-approval.component.html',
  styleUrls: ['./admin-crop-approval.component.css']
})

export class AdminCropApprovalComponent implements OnInit {
  sellrequestService: any;
  
  public crop_approval_data = [];
  constructor(public fb: FormBuilder,
    private router: Router,
    public admincropapprovalservice: AdmincropapprovalService) 
    { 
    this.admincropapprovalservice.admincropapproval().subscribe(res => {
      console.log(res, "sell request console");
      
      this.crop_approval_data = res;
    });
    // this.admincropapprovalservice.admincropapproval().subscribe(res => {
    //   console.log(res, "sell request console");
    // });
  }
  uid:number = Number(sessionStorage.getItem("userid"));
  onapprove(request_id)
{ let biddataobj=new bidinsert
  biddataobj.request_id=request_id;
  biddataobj.userid=this.uid;
  biddataobj.amount=0
 biddataobj.bidding_time=new Date();
  console.log(biddataobj, "bid obj")
  this.admincropapprovalservice.update(request_id,biddataobj).subscribe(res => {
    console.log(res, "ontype console data");
    this.ngOnInit();
  });
}
  ngOnInit(): void {
    this.admincropapprovalservice.admincropapproval().subscribe(res => {      
      this.crop_approval_data = res;
    });
  }

}
export class bidinsert
{
  request_id:Number;
  userid:Number;
  amount:Number;
  bidding_time:Date;
}
