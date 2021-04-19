import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminBidApprovalService } from '../admin-bid-approval.service';

@Component({
  selector: 'app-admin-bid-approval',
  templateUrl: './admin-bid-approval.component.html',
  styleUrls: ['./admin-bid-approval.component.css']
})
export class AdminBidApprovalComponent implements OnInit {
  public bid_res = [];
  BidApproveForm = new FormGroup({
    bid_id: new FormControl(),
    request_id: new FormControl(),
    userid: new FormControl(),
    crop_name: new FormControl(),
    quantity: new FormControl(),
    fertilizer_type: new FormControl(),
    msp: new FormControl(),
    base_price: new FormControl(),
    amount: new FormControl()
  })
  constructor(public fb: FormBuilder,
    private router: Router,
    public adminbidapprovalservice: AdminBidApprovalService) {
    this.adminbidapprovalservice.Getbid_information().subscribe(res => {
      // console.log(res,"const console");
      this.bid_res = res;
    });
  }

  ngOnInit() {
    this.adminbidapprovalservice.Getbid_information().subscribe(res => {
      this.bid_res = res;

    });
    // this.adminbidapprovalservice.Get_bidid(this.bid_res[0].request_id).subscribe(res1 => {
    //   console.log(res1,"BID_ID")
    // });
  }

  get bid_id() {
    return this.BidApproveForm.get('bid_id');
  }
  get request_id() {
    return this.BidApproveForm.get('request_id');
  }
  get userid() {
    return this.BidApproveForm.get('userid');
  }
  get crop_name() {
    return this.BidApproveForm.get('crop_name');
  }
  get quantity() {
    return this.BidApproveForm.get('quantity');
  }
  get fertilizer_type() {
    return this.BidApproveForm.get('fertilizer_type');
  }
  get msp() {
    return this.BidApproveForm.get('msp');
  }
  get base_price() {
    return this.BidApproveForm.get('base_price');
  }
  get amount() {
    return this.BidApproveForm.get('amount');
  }
  public bidid: number;
  onapprove(request_id) {
    this.adminbidapprovalservice.Get_bidid(request_id).subscribe(res1 => {

      this.bidid = res1;
      console.log(this.bidid, "BID_ID")
      let bidapprovalobject = new bidapprovalclass();
    bidapprovalobject.request_id = request_id;
    bidapprovalobject.bid_id = this.bidid;
    console.log(bidapprovalobject, "bidapprovalobj");
    this.adminbidapprovalservice.update(request_id, bidapprovalobject ).subscribe(res => {
      console.log(res, "DATA CONSOLE");
      this.ngOnInit();
    });
    });
    console.log(this.bidid, "BIDID2")
    
    // this.adminbidapprovalservice.update(request_id, bidapprovalobject ).subscribe(res => {
    //   console.log(res, "DATA CONSOLE");
    //   this.ngOnInit();
    // });

  }
}
export class bidapprovalclass {
  request_id: number;
  bid_id: number;
}
